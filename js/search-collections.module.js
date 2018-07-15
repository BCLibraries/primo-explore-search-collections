angular
    .module('bc-search-collections', [])
    .controller('prmCollectionGalleryHeaderAfterController', [function () {
        var vm = this;
        vm.isGalleryLobby = vm.parentCtrl.isGalleryLobby;
        vm.currentCollection = vm.parentCtrl.currentCollection;
    }])
    .component('prmCollectionGalleryHeaderAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmCollectionGalleryHeaderAfterController',
        templateUrl: `primo-explore-search-collections/html/search-collections.html`
    });
