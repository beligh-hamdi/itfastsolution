(function(){

    function UserService($http, $q, RESOURCE_API_PATH){

        this.getAll = function(){
            var deferred = $q.defer();
            $http.get(RESOURCE_API_PATH+'/users').then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.get = function(id){
            var deferred = $q.defer();
            $http.get(RESOURCE_API_PATH+'/users/'+ id).then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.post = function(user){
            var deferred = $q.defer();
            $http.post(RESOURCE_API_PATH+'/users', user).then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.put = function(user){
            var deferred = $q.defer();
            $http.put(RESOURCE_API_PATH+'/users', user).then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.delete = function(id){
            var deferred = $q.defer();
            $http.delete(RESOURCE_API_PATH+'/users/'+id).then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        
        this.login = function(user){
            var deferred = $q.defer();
            $http.post(RESOURCE_API_PATH+'/login', user).then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.logout = function(){
            var deferred = $q.defer();
            $http.get(RESOURCE_API_PATH+'/logout').then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.getSession = function(){
            var deferred = $q.defer();
            $http.get(RESOURCE_API_PATH+'/login').then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        

    }

    UserService.$inject = ['$http', '$q', 'RESOURCE_API_PATH'];

    angular.module('ifs').service("UserService", UserService);

})();
