angular
   .module('app')
   .controller('MainController', MainController);

 function MainController($scope) {
  $scope.name = "Sean Liu"
  $scope.email = "seanliu93@bu.edu"
  $scope.phone = "6176789999"
 }