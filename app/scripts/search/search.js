app.controller('SearchCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
  
  $scope.items = ["asdf", "adsfsdf", "jlkkjölk", "2345", "aasd", "ööääsdf", "asdfdfaa33", "234DFDFFD", 
                  "pplkkjasdf",
                  "098asdsf", "0000a909df"]
  
  $scope.search = {
    text: "meine suche"
  }
  
});