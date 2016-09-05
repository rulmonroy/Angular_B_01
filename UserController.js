(function() {
   var app = angular.module("GithubViewer");

   var UserController = function($scope, github, $routeParams) {
      // Properties.

      // Methods
      var onGetData = function(data) {
         $scope.user = data;
         github.getRepos($scope.user).then(onGetRepos, onError);
      };

      var onGetRepos = function(data) {
         $scope.repos = data;
      };

      var onError = function(reason) {
         $scope.error = "Could not fetch data.";
      };

      // Initializers
      $scope.username = $routeParams.username;
      $scope.repoSortOrder = "-stargazers_count";
      github.getUser($scope.username).then(onGetData, onError);
   };

   app.controller("UserController", UserController);
}());