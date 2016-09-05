(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };
    
    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response){
          return response.data;
        });
    };
    
    var getRepoDetails = function(username, reponame) {
       return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
        .then(function(response) {
          return response.data;
        });
    };
    
    var getContributors = function(repo) {
       return $http.get(repo.contributors_url)
        .then(function(response){
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
      getContributors: getContributors
    };
  }

  var module = angular.module("GithubViewer");
  module.factory("github", github);
}());