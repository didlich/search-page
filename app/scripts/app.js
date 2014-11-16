'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('SearchPage', ['ionic', 'config', 'ngMockE2E']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

//define our fake backend
app.run(function($httpBackend) {

  var capitols = [{name: 'New York'}, {name: 'Moscow'}]; 
  
//  $httpBackend.whenPOST('/location').respond(function(method, url, data, headers){
//    console.log('Received these data:', method, url, data, headers);
//    phones.push(angular.fromJson(data));
//    return [200, {}, {}];
//  });
  
  // Don't mock the html views
  $httpBackend.whenGET(/views\/\w+.*/).passThrough();
  // For everything else, don't mock
  $httpBackend.whenGET(/^\w+.*/).passThrough();
  $httpBackend.whenPOST(/^\w+.*/).passThrough();
  
  $httpBackend.whenGET('/location').respond(function(method, url, data) {
    console.log("Getting locations");
    return [200, capitols, {}];
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('search', {
    url: '/',
    templateUrl: 'scripts/search/search.html',
    controller: 'SearchCtrl'
  });
});
