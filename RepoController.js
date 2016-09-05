(function() {
   var app = angular.module("GithubViewer");

   var RepoController = function($scope, github, $routeParams) {
      // Properties.

      // Methods
      var onGetRepoData = function(data) {
         $scope.repo = data;
         github.getContributors($scope.repo).then(onGetContributors, onError);
      };

      var onGetContributors = function(data) {
         $scope.contributors = data;
      };

      var onError = function(reason) {
         $scope.error = "Could not fetch data.";
      };

      // Initializers
      $scope.username = $routeParams.username;
      $scope.reponame = $routeParams.reponame;
      $scope.contribSortOrder = "+name";
      github.getRepoDetails($scope.username, $scope.reponame).then(onGetRepoData, onError);
   };

   app.controller("RepoController", RepoController);
}());