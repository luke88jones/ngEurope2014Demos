angular.module("myApp", [])
  .controller("myController", myController);

  myController.$inject = ["$scope", "myService"];

  function myController($scope, myService) {
    $scope.testData = myService.getTestData();
    $scope.showTop = true;
    $scope.top = {
      header: "Top Section"
    };
    $scope.bottom = {
      header: "Bottom Section"
    };

  }
