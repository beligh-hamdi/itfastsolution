(function(){

    function ProductsCtrl(ProductService, $location) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            activate();
        };
        
        function activate(){
            ProductService.getAll().then(function (data) {
                $ctrl.list = angular.copy(data);
            },function (error) {

            });
        }
        
    }

    ProductsCtrl.$inject = ['ProductService', '$location'];

    angular.module('ifs.users').component('ifsProducts', {
        templateUrl: 'app/products/products.html',
        controller: ProductsCtrl,
        bindings: {
            
        }
    });
    
})();