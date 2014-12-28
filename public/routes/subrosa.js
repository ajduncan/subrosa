'use strict';

angular.module('mean.subrosa').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('subrosa', {
      url: '/subrosa/index',
      templateUrl: 'subrosa/views/index.html'
    });
  }
]);
