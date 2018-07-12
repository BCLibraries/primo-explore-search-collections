angular
    .module('bc-search-collections', [])
    .controller('prmCollectionGalleryHeaderAfter', [function () {
        var vm = this;
        vm.term = vm.parentCtrl.term;
        vm.scope = vm.parentCtrl.searchStateService.searchObject.scope;
    }])
    .component('prmCollectionGalleryHeaderAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmCollectionGalleryHeaderAfterController',
        templateUrl: `primo-explore-search-collections/html/search-collections.html`
    });
