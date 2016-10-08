angular.module('ifiske.controllers')
.controller('AreasCtrl', function(
    $scope,
    $stateParams,
    $ionicScrollDelegate,
    Area
) {
    var copy = $stateParams.search;
    $scope.search = copy;
    $scope.county = $stateParams.county || 'Search results';
    Area.search('', $stateParams.id)
    .then(function(data) {
        $scope.areas = data;
    }, function(err) {
        console.log(err);
    });
    $scope.clearSearch = function() {
        $scope.search = '';
    };
    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };
});
