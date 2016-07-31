(function(){

    function ProductService($http, $q, RESOURCE_API_PATH){

        this.getAll = function(){
            var deferred = $q.defer();
            $http.get(RESOURCE_API_PATH+'/products').then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

    }

    ProductService.$inject = ['$http', '$q', 'RESOURCE_API_PATH'];

    angular.module('ifs').service("ProductService", ProductService);

})();
