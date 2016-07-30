(function(){

    function UserCtrl(UserService, $location) {

        var $ctrl = this;

        $ctrl.$onInit = function(){
            activate();
        };

        $ctrl.onUserInfoClicked = function(user){
            $ctrl.user = angular.copy(user);
        };

        $ctrl.onUserDetailClicked = function(id){
            $location.path('users/'+id);
        };

        $ctrl.onUserAddClicked = function(){
            $ctrl.isShowUserForm = true;
        };

        $ctrl.onUserHideClicked = function(){
            $ctrl.isShowUserForm = false;
        };

        $ctrl.onUserDeleteClicked = function(id){
            UserService.delete(id).then(function (data) {
                var id = angular.copy(data);
                $ctrl.users = $ctrl.users.filter(function(a){ return a.id !== id });
            },function (error) {

            });
        };

        function activate(){
            UserService.getAll().then(function (data) {
                $ctrl.users = angular.copy(data);
            },function (error) {

            });

            if($ctrl.allUsers){
                // console.log('allUsers with resolve', $ctrl.allUsers);
                $ctrl.users = angular.copy($ctrl.allUsers);
            }

        }
        
    }

    UserCtrl.$inject = ['UserService', '$location'];

    angular.module('ifs.users').component('ifsUsers', {
        templateUrl: 'app/users/users.html',
        controller: UserCtrl,
        bindings: {
            allUsers: '<'
        }
    });
    
})();