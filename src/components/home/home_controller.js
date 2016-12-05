angular.module('ifiske.controllers')
.controller('HomeCtrl', function(
    $scope,
    $state,
    $ionicHistory,
    localStorage,
    sessionData,
    Update,
    $window,
    Admin
) {
    $scope.$on('$ionicView.load', function() {
        if ($window.ga) {
            if (sessionData.token) {
                $window.ga.trackMetric('Logged in', 'Yes');
            } else {
                $window.ga.trackMetric('Logged in', 'No');
            }
        }
    });
    console.log($ionicHistory);
    $scope.$on('$ionicView.enter', function() {
        Admin.isAdmin().then(function(isAdmin) {
            console.log(isAdmin);
            $scope.admin = isAdmin;
        });
    });
    $scope.loggedIn = sessionData;

    $scope.update = Update;

        // Current history stack Id. See area_controller for usage.
    localStorage.set('homeHistoryId', $ionicHistory.currentHistoryId());

    $scope.news = function() {
        return localStorage.get('NEWS');
    };

    $scope.myFunc = function($event) {
        if ($event.keyCode === 13 && !$event.shiftKey) { // if enter-key
            var searchTerm = $event.srcElement.value;
            $window.ga.trackMetric('Search', searchTerm);
            $state.go('app.areas', {search: searchTerm});
        }
    };
});
