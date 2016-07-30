(function(){

    angular.module('ifs', [
        'ngRoute',
        'angularFileUpload',
        'ifs.navbar', 'ifs.pages', 'ifs.users'
    ]);
    
    // bootstrap app
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['ifs']);
    });

})();