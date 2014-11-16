app.directive('cstmSearchInput', function() {
  return {
    restrict: 'E', /* restrict this directive to elements */
    transclude: true,
    templateUrl: 'scripts/search/cstmSearchInputTmpl.html',
    replace: true,
    scope: {
      textinput: "@" // one way
    },
    link: function(scope, element, attrs) {
      scope.search = scope.textinput;
      
      scope.inputChanged = function() {
        console.log("INput chnaged");
      };
      
    }
  }
    
});
