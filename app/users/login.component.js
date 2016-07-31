(function(){

    function LoginCtrl(UserService, $routeParams, $scope) {

        var $ctrl = this;
       

        $ctrl.$onInit = function(){
            activate();
        };

        $ctrl.onLoginClicked = function(user){
            UserService.login(user).then(function (data) {
               // $ctrl.userId = angular.copy(data);
                
            },function (error) {
                console.log(error);
            });
        };
        
        
        function activate(){
           
        }


    }

    LoginCtrl.$inject = ['UserService', '$routeParams', '$scope'];

    angular.module('ifs.users').component('ifsLogin', {
        templateUrl: 'app/users/login.html',
        controller: LoginCtrl,
        bindings: {

        }
    });
    
})();