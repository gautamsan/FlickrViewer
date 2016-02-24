/**
 * Created by santoshgautam on 1/4/16.
 */
angular.module('favorites', [
  'ui.router',
  'ngResource'
])
.controller('FavoritesCtrl', function($rootScope, $scope, $http, $modal) {
  console.log($scope);
  $scope.getFav = function(username) {
    console.log(username);
    $http({
      method: 'GET',
      params: {username: username},
      url: '/api/favs'
    })
    .success(function(data, status) {
      $scope.favoritePics = data;
      $rootScope.favoritePics = data;
      console.log(data);
    })
      .error(function(err) {
        console.log(err);
      })
  };

  $scope.deleteFav = function(url) {
    console.log(url);
    $http({
      //Angular does not send 'body' or 'url-params' in 'DELETE' req.
      //Possibly use 'DELETE' and headers: {"Content-Type": "application/json;charset=utf-8"}
      method: 'PUT',
      data: {url: url},
      url: '/api/delFav'
    })
      .success(function(data, status) {
        console.log(data);
        $scope.getFav("santosh");
      })
      .error(function(err) {
        console.log(err);
      })
  };

  $scope.getFav("santosh");
});