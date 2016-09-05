(function() {

   var app = angular.module("GithubViewer");

   var MainController = function($scope, $interval, $location) {
      // Properties.
      $scope.countdown = {
         interval: null,
         seconds: 5,
         Start: function() {
            $scope.countdown.interval = $interval($scope.countdown.Decrement, 1000, $scope.countdown.seconds);
         },
         Decrement: function() {
            $scope.countdown.seconds--;

            if ($scope.countdown.seconds <= 0) {
               $scope.Search($scope.username);
            }
         },
         Stop: function() {
            if ($scope.countdown.interval)
               $interval.cancel($scope.countdown.interval);
         }
      };

      // Methods
      $scope.Search = function(username) {
         if ($scope.countdown) {
            $scope.countdown.Stop();
         }
         $location.path("user/" + username);
      };

      // Initializers
      $scope.username = "angular";
      $scope.countdown.Start();
   }
   app.controller("MainController", MainController);
}());