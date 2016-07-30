(function(){

    function ContactCtrl($routeParams) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            
        }

    }

    ContactCtrl.$inject = ['$routeParams'];

    angular.module('ifs.pages').component('ifsContact', {
        templateUrl: 'app/pages/contact.html',
        controller: ContactCtrl,
        bindings: {

        }
    });
    
})();