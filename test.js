galleryModule.factory('Imagesquery', ['angularFireCollection', function(angularFireCollection){
	var imagesquery = {};
	imagesquery.query = function(){
		 var url = 'https://mbg.firebaseio.com/images';
		 angularFireCollection(url);
	};
	return imagesquery;
}]);


resolve: {
			  // I will cause a 1 second delay
			  delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1000);
				return delay.promise;
			  }
			}