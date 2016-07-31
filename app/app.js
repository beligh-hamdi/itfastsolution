(function(){

    angular.module('ifs', [
        'ngRoute',
        'angularFileUpload', 'LocalStorageModule',
        'ifs.navbar', 'ifs.pages', 'ifs.users', 'ifs.products'
    ]);
    
    // bootstrap app
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['ifs']);
    });

})();