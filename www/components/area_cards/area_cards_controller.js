angular.module('ifiske.controllers')
.controller('AreaDetailCardCtrl', ['$scope', 'DB', '$stateParams', '$ionicModal', '$localstorage', 'API', function($scope, DB, $stateParams, $ionicModal, $localstorage, API) {
    API.get_sms_terms()
    .success(function(terms) {
        //TODO: move somewhere else.
        $localstorage.set('sms_terms', terms.data.response);
        $scope.smsterms = $localstorage.get('sms_terms');
    });
    $scope.predicate = "so";
    DB.getProductsByArea($stateParams.id)
    .then(function(data) {
        $scope.products = data;
    }, function(err) {
        console.log(err);
    });

    //SMS-modal

    $ionicModal.fromTemplateUrl('components/area_cards/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function(card) {
        $scope.modal.show();
        $scope.product = card;
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    $scope.showingterms = false;
    $scope.showTerms = function($event) {
        $scope.showingterms = !$scope.showingterms;
    };

}]);
