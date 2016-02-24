/**
 * Created by santoshgautam on 1/4/16.
 */
angular.module('flickrViewer', [
  'favorites',
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'ngAnimate'
])
.config(function ($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
   .state('pictures', {
     url: '/pictures',
     templateUrl: 'app/partials/pictures.html'
   })
   .state('favorites', {
     url: '/favorites',
     templateUrl: 'app/partials/favorites.html',
     controller: 'FavoritesCtrl'
   });
})
.controller('MainCtrl', function($rootScope, $scope, $http, $modal, $state) {
  $scope.favoritePics = $rootScope.favoritePics;
  $rootScope.favs = false;
  $scope.search = {text: 'everest'};
  var key = '4f8b5f95545e8e16789b2db710eae1a8';
  $scope.searchForPics = function () {
    $http({
      method: 'JSONP',
      params: { api_key: key, tags: $scope.search.text, safe_search: 1, per_page: 20, extras: 'url_l', format: 'json' },
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    })
    .success(function(data) {
    });

    //Flickr needs this
    jsonFlickrApi = function(data){
      $scope.photos = data.photos;
      console.log(data.photos);
      $scope.openModal();
    };
  };

  $scope.searchForPics();

  $scope.addFav = function(imgLink, title) {
    console.log(imgLink);
    $http({
      method: 'POST',
      data: {username: 'santosh', picUrl: imgLink, title: title},
      url: '/api/postFav'
    }).success(function(data, status) {
      $scope.saveFav = true;
      alert("Saved to favorites");
      console.log(status);
    })
  };

  $scope.openModal=function(){
    $scope.modalInstance=$modal.open({
      animation: true,
      templateUrl: 'app/partials/pic-modal.html',
      scope: $scope,
      size: 'lg'
    });
  };
});