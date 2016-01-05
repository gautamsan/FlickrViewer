/**
 * Created by santoshgautam on 1/4/16.
 */
angular.module('flickrViewer', [
  'ui.router',
  'ngResource'
])
.config(function ($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
   .state('pictures', {
     url: '/pictures',
     templateUrl: 'app/partials/pictures.html'
   })
   .state('comments', {
     url: '/comments',
     templateUrl: 'app/partials/comments.html'
   })
})
.controller('MainCtrl', function($scope, $http) {
  $scope.hello = {};
  $scope.hello.hi = 'hi';
  $scope.search = {text: 'nature'};
  var key = '4f8b5f95545e8e16789b2db710eae1a8';
  $scope.searchForPics = function () {
    $http({
      method: 'JSONP',
      params: { api_key: key, tags: $scope.search.text, safe_search: 1, per_page: 20, extras: 'url_m', format: 'json' },
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    })
    .success(function(data) {
    });

    //Flickr needs this
    jsonFlickrApi = function(data){
      $scope.photos = data.photos;
      console.log(data.photos);
    };
  };

  $scope.searchForPics();

  $scope.addFav = function(imgLink) {
    console.log(imgLink);
    $http({
      method: 'POST',
      data: {id: 1, username: 'santosh', picUrl: imgLink},
      url: '/api/postFav'
    }).success(function(data, status) {
      console.log(status);
    })
  }
});