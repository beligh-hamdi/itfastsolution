(function(){

    function HomeCtrl($routeParams) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            
        }

    }

    HomeCtrl.$inject = ['$routeParams'];

    angular.module('ifs.pages').component('ifsHome', {
        templateUrl: 'app/pages/home.html',
        controller: HomeCtrl,
        bindings: {

        }
    });
    
})();