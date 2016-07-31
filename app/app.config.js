(function(){

    function Config($routeProvider, localStorageServiceProvider){
        
        var routeResolvers = {
            allUsers: function(UserService) {
                return UserService.getAll().then(function(response) {
                   return response;
                });
            },
            logout: function(UserService) {
                return UserService.logout().then(function(response) {
                    return response;
                });
            }
        };

        localStorageServiceProvider.setPrefix('ifs');

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

            .when('/logout',{
                resolve: {
                    logout : routeResolvers.logout
                }
            })
            
            .when('/users',{
                template:'<ifs-users></ifs-users>'
            })

            .when('/users/:id',{
                template:'<ifs-user></ifs-user>'
            })
            
            .otherwise({redirectTo:'/'});
    }

    Config.$inject = ['$routeProvider', 'localStorageServiceProvider'];

    function Run($rootScope, $location, UserService, localStorageService){


       // localStorageService.set(key, val);
      // localStorageService.get(key);
      //  localStorageService.clearAll();


        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            $rootScope.active= $location.$$url;

            $rootScope.authenticated = false;
            UserService.getSession().then(function (data) {
                var nextUrl = $location.$$url;
                if (data) {
                    $rootScope.authenticated = true;

                } else {
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        // $location.path('/login');
                    }
                }
            },function (error) {
                
            });

        });
    }

    Run.$inject = ['$rootScope', '$location', 'UserService', 'localStorageService'];

    angular.module('ifs')
        .constant('RESOURCE_API_PATH', 'api');

    angular.module('ifs')
        .config(Config)
        .run(Run);
    
})();