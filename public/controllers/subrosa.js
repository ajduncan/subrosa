'use strict';

/* jshint -W098 */
angular.module('mean.subrosa').controller('SubrosaController', ['$scope', 'Global', 'Subrosa',
  function($scope, Global, Subrosa) {
    $scope.global = Global;
    $scope.package = {
      name: 'subrosa'
    };
  }
]);
