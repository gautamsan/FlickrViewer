/**
 * Created by santoshgautam on 1/4/16.
 */
angular.module('flickrViewer', [
  'ui.router'
])
.controller('MainCtrl', function($scope) {
  $scope.hello = {};
  $scope.hello.hi = 'hi';
});