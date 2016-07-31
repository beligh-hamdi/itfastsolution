(function(){

    function config($routeProvider){
        
        var routeResolvers = {
            allUsers: function(UserService) {
                return UserService.getAll().then(function(response) {
                   return response;
                });
            }
        };

        $routeProvider

            .when('/',{
                template:'<ifs-home></ifs-home>'
            })

            .when('/about',{
                template:'<ifs-about></ifs-about>'
            })

            .when('/contact',{
                template:'<ifs-contact></ifs-contact>'
            })

            .when('/users-resolve',{
                template:'<ifs-users all-users="$resolve.list"></ifs-users>',
                resolve: {
                    list: routeResolvers.allUsers
                }
            })


            .when('/login',{
                template:'<ifs-login></ifs-login>'
            })
            
            .when('/users',{
                template:'<ifs-users></ifs-users>'
            })

            .when('/users/:id',{
                template:'<ifs-user></ifs-user>'
            })
            
            .otherwise({redirectTo:'/'});
    }

    function run($rootScope, $location){
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            $rootScope.active= $location.$$url;
        });
    }

    angular.module('ifs')
        .constant('RESOURCE_API_PATH', 'api');

    angular.module('ifs')
        .config(config)
        .run(run);
    
})();