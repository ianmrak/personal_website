(function() {
  'use strict'

  angular.module("mySite")
  .directive('portfolioCtrls',
  [
    '$state',
    'PortfolioService',
    'IllustrationService',
    'ModelingService',
    portfolioCtrls
  ]);

  function portfolioCtrls($state, portfolio, illustrations, models) {
    return {
      link: function($scope, e, attr) {
        $scope.setActiveItem = function(e, item, index) {
          e.preventDefault();
          portfolio.index = index;
          portfolio.activeItem = item;
          portfolio.list = $scope.items;
        }
        $scope.resetActiveItem = function() {
          portfolio.activeItem = null;
          $scope.index = null;
        }
        $scope.nextItem = function(d) {
          let i = portfolio.index+=d;
          if (portfolio.list[i]) {
            portfolio.activeItem = portfolio.list[i];
          }
          else {
            i--;
          }
        }
      }
    }
  }

})();
