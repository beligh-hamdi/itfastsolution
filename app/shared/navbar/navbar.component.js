(function(){

    function NavbarCtrl() {
        var $ctrl = this;

        $ctrl.$onInit = function(){

        };
        
        $ctrl.isActive = function(link){
           return  link === $ctrl.active ? 'active' : '';
        };

    }

    NavbarCtrl.$inject = [];

    angular.module('ifs.navbar').component('ifsNavbar', {
        templateUrl: 'app/shared/navbar/navbar.html',
        controller: NavbarCtrl,
        bindings: {
           active: '<'
        }
    });
    
})();