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
  $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
    .success(function(data) {

    });
    jsonFlickrFeed = function(data){
      $scope.data = data;
      console.log(data.items);
    }

});