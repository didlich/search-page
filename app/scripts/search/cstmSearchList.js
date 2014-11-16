app.directive('cstmSearchList', function() {
  return {
    restrict: 'E', /* restrict this directive to elements */
    transclude: true,
    templateUrl: 'scripts/search/cstmSearchListTmpl.html',
    replace: true,
    scope: {
      filterfor: "@"
    },
    link: function(scope, element, attrs) {
      
    }
  }
    
});
