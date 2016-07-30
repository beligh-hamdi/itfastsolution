(function(){

    function UserCtrl(UserService, $routeParams, FileUploader, $scope) {

        var $ctrl = this;
        var uploader = $ctrl.uploader = new FileUploader({
            url: 'upload.php',
            queueLimit: 1
        });

        $ctrl.$onInit = function(){
            activate();
        };

        $ctrl.onCreateUserClicked = function(user){
            UserService.post(user).then(function (data) {
                $ctrl.userId = angular.copy(data);
                $ctrl.user = {};
                $ctrl.uploader.clearQueue();

            },function (error) {

            });
        };

        $ctrl.onUpdateUserClicked = function(user){
            UserService.put(user).then(function (data) {
                $ctrl.user = angular.copy(data);
                $ctrl.uploader.clearQueue();
            },function (error) {

            });
        };


        /*
        $scope.$watch('$ctrl.uploader', function(newValue, oldValue) {
             console.log(newValue);
        });
        */

        // FILTERS
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS
        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
             console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onBeforeUploadItem = function(item) {
             console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
             console.info('onProgressItem', fileItem, progress);
        };

        uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
             console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
             console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            $ctrl.user.img = fileItem.file.name;
        };

        
        function activate(){
            var id = $routeParams.id;
            UserService.get(id).then(function (data) {
                $ctrl.user = angular.copy(data);
            },function (error) {

            });
        }


    }

    UserCtrl.$inject = ['UserService', '$routeParams', 'FileUploader', '$scope'];

    angular.module('ifs.users').component('ifsUser', {
        templateUrl: 'app/users/user.html',
        controller: UserCtrl,
        bindings: {

        }
    });
    
})();