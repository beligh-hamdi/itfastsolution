(function(){

    function AboutCtrl($routeParams) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            
        }

    }

    AboutCtrl.$inject = ['$routeParams'];

    angular.module('ifs.pages').component('ifsAbout', {
        templateUrl: 'app/pages/about.html',
        controller: AboutCtrl,
        bindings: {

        }
    });
    
})();