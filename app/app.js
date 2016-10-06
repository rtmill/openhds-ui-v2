
// Declare app level module which depends on views, and components
var app = angular.module('openhds-ui',['ui.router','ui.router.stateHelper','ngAnimate','ngCookies','ngResource', 'ngStorage','ui.bootstrap',
    'ServicesModule',
    'HomeModule',
    'ExploreModule',
    'HierarchyModule',
    'LocationModule',
    'IndividualModule',
    'ResidencyModule',
    'MembershipModule',
    'SocialGroupModule',
    'RelationshipModule'
]);

app.config(['stateHelperProvider','$urlRouterProvider','$urlMatcherFactoryProvider',function(stateHelperProvider,$urlRouterProvider,$urlMatcherFactoryProvider) {

  $urlRouterProvider.otherwise("/");

  $urlMatcherFactoryProvider.strictMode(false)

  stateHelperProvider.state({
    name: "home",
    url: "/",
    templateUrl: "home/home.html",
    controller: "HomeCtrl"

  }).state({
      name: "explore",
      url: "/explore",
      templateUrl: "explore/explore.html",
      controller: "SelectedCtrl"


  }).state({
      name: "explore.locHier",
      url: "/hierarchy",
      templateUrl:"explore/hierarchy/hierarchy.html",
      controller: "HierarchyCtrl"

  }).state({
        name: "explore.location",
        url: "/location",
        templateUrl:"explore/location/location.html",
        controller: "LocationCtrl"

    }).state({
      name: "explore.individual",
      url: "/individual",
      templateUrl:"explore/individual/individual.html",
      controller: "IndividualCtrl"

  }).state({
      name: "explore.residency",
      url: "/residency",
      templateUrl:"explore/residency/residency.html",
      controller: "ResidencyCtrl"

  }).state({
      name: "explore.relationship",
      url: "/relationship",
      templateUrl:"explore/relationship/relationship.html",
      controller: "RelationshipCtrl"

  }).state({
      name: "explore.membership",
      url: "/membership",
      templateUrl:"explore/membership/membership.html",
      controller: "MembershipCtrl"

  }).state({
      name: "explore.socialGroup",
      url: "/socialGroup",
      templateUrl:"explore/socialGroup/socialGroup.html",
      controller: "SocialGroupCtrl"

  });



}])


;
