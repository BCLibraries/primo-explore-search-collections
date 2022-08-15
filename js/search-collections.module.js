angular
    .module('bc-search-collections', [])
    .controller('prmCollectionGalleryHeaderAfterController', [function () {
		this.$onInit = function () {
			var vm = this;
			vm.isGalleryLobby = vm.parentCtrl.isGalleryLobby;
			vm.getCollection = getCollection;

			function getCollection() {
				return vm.parentCtrl.currentCollection.name;
			}
		};
    }])
    .component('prmCollectionGalleryHeaderAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmCollectionGalleryHeaderAfterController',
        templateUrl: `primo-explore-search-collections/html/search-collections.html`
    });
