var app = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var services = [
      {
        name: "Web Development",
        price: 300,
      },
      {
        name: "Design",
        price: 400,
      },
      {
        name: "Integration",
        price: 250,
      },
      {
        name: "Training",
        price: 220,
      },
    ];
    $scope.services = services;
    $scope.total = 0;

    $scope.menuClick = function ($index, ser) {
      ser.value = !ser.value;
      ser.value
        ? ($scope.total += $scope.services[$index].price)
        : ($scope.total -= $scope.services[$index].price);

      // console.log($scope.services[$index]);
    };
  });
