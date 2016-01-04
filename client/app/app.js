/**
 * Created by santoshgautam on 1/4/16.
 */
angular.module('flickrViewer', [
  'ui.router'
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
.controller('MainCtrl', function($scope) {
  $scope.hello = {};
  $scope.hello.hi = 'hi';
});