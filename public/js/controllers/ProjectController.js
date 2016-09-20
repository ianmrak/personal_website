angular.module('App.ProjectController', [])

.controller('ProjectController', ['$scope', 'ProjectService', function($scope, pService) {
  $scope.projects = pService.projects;
  $scope.gitIcon = pService.gitIcon;
  $scope.prettyUrl = function(url) {
    return url.replace(/.*?:\/\//g, "");
  }
}])
