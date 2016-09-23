angular.module('ifiske.controllers')
.controller('AreaInfoCtrl', function(
    $scope,
    sessionData,
    $ionicPopup,
    API,
    Area,
    User,
    $ionicPlatform,
    $cordovaToast,
    $stateParams
) {
    $scope.slideOptions = {
        loop:       true,
        effect:     'slide',
        speed:      250,
        autoPlay:   1000,
        autoHeight: true,
    };
    Area.getPhotos($stateParams.id)
    .then(function(images) {
        $scope.images = images;
        if ($scope.slider) {
            $scope.slider.updateLoop();
        }
    }, function(err) {
        console.warn(err);
    });

    $scope.$on("$ionicSlides.sliderInitialized", function(_event, data) {
        // grab an instance of the slider
        $scope.slider = data.slider;
        $scope.slider.updateLoop();
    });

    $scope.changeFavorite = function() {
        if (sessionData.token) {
            $scope.area.favorite = !$scope.area.favorite;
            var promise;
            if ($scope.area.favorite) {
                promise = API.user_add_favorite($scope.area.ID)
                .then(function() {
                    return User.addFavorite($scope.area.ID);
                }).then(function() {
                    return $ionicPlatform.ready(function() {
                        $cordovaToast.show(
                            'Området är nu tillagt i dina favoriter',
                            'short',
                            'bottom'
                        );
                    });
                });
            } else {
                promise = API.user_remove_favorite($scope.area.ID).then(function() {
                    return User.removeFavorite($scope.area.ID);
                }).then(function() {
                    $ionicPlatform.ready(function() {
                        $cordovaToast.show(
                            'Området är nu borttaget från dina favoriter',
                            'short',
                            'bottom'
                        );
                    });
                });
            }
            promise.catch(function(err) {
                console.warn(err);
            });
        } else {
            $ionicPopup.alert({
                title: 'Du måste vara inloggad för att kunna markera fiskevatten som favoriter.',
            });
        }
    };
});
