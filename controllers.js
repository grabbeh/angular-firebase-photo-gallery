var galleryModule = angular.module('galleryModule', ['firebase']);

galleryModule.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			controller: 'initialController',
			templateUrl: 'largeimagetemplate.html'
		}).
		when('/view/:id', {
			controller: 'mainimageController',
			templateUrl: 'largeimagetemplate.html'
		}).
		when('/about',{
			controller: 'blankController',
			templateUrl: 'about.html'
		}).
		when('/contactme',{
			controller: 'blankController',
			templateUrl: 'contactme.html'
		}).
		otherwise({
			redirectTo: '/'
	});
}]);
galleryModule
.value("url", "https://mbg.firebaseio.com/images")
.controller('thumbnailController', ['$scope', 'angularFireCollection', 'url',
    function($scope, angularFireCollection, url) {
        $scope.images = angularFireCollection(url);
    }])
.controller('initialController', ['$scope', 'angularFire', 'url',
    function($scope, angularFire, url) {
        angularFire(url, $scope, 'images').then(function() {
            $scope.largeurl = $scope.images[0].largeurl;
        });
    }])
.controller('mainimageController', ['$scope', 'angularFire', '$routeParams', 'url',
    function($scope, angularFire, $routeParams, url){
        angularFire(url, $scope, 'images').then(function() {
            $scope.largeurl = $scope.images[$routeParams.id].largeurl;
        });
    }]);

function blankController($scope){
	
};

