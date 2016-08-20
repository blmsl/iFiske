angular.module('ifiske.controllers')
.controller('UserCardsCtrl', [
    '$scope',
    '$stateParams',
    'DB',
    'Update',
    'PullToRefresh',
    function($scope, $stateParams, DB, Update, PullToRefresh) {
        $scope.pred = '-to';
        $scope.$on('$ionicView.beforeEnter', function() {
            PullToRefresh.trigger('licenses-content');
        });

        var initilize = function() {
            Update.update(true)
            .then(function() {
                $scope.now = Date.now();
                return DB.getUserProducts();
            })
            .then(function(data) {
                var now = parseInt(Date.now() / 1000);
                $scope.valid = [];
                $scope.expired = [];
                $scope.inactive = [];
                for (var i = 0; i < data.length; ++i) {
                    data[i].validity = data[i].fr < now ? now < data[i].to ? 'valid' : 'expired' : 'inactive';
                    $scope[data[i].validity].push(data[i]);
                }
                $scope.products = data;
                console.log($scope);
            }, function(err) {
                console.log(err);
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        //$scope.$on('$ionicView.loaded', initilize);
        $scope.update = function() {
            initilize();
        };
    }
]);
