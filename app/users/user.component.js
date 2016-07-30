(function(){

    function UserCtrl(UserService, $routeParams) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            activate();
        };
        
        function activate(){
            var id = $routeParams.id;
            UserService.get(id).then(function (data) {
                $ctrl.user = angular.copy(data);
            },function (error) {

            });
        }
    }

    UserCtrl.$inject = ['UserService', '$routeParams'];

    angular.module('ifs.users').component('ifsUser', {
        templateUrl: 'app/users/user.html',
        controller: UserCtrl,
        bindings: {

        }
    });
    
})();