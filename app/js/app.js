var app = angular.module('openhds-ui',['ui.router','ui.router.stateHelper','ngAnimate','ngCookies','ngResource', 'ngStorage',
    'LocationsModule',
    'ExplorerModule',
    'SearchModule',
    'testService',
    'ServicesModule',
    'EditLocationModule',
    'CreateLocationModule',
    'EditIndividualModule',

    'ExploreModule',
    'LocationHierarchyModule',
    'LocationModule',
    'IndividualModule',
    'SocialGroupModule'
]);

app.config(['stateHelperProvider','$urlRouterProvider','$urlMatcherFactoryProvider',function(stateHelperProvider,$urlRouterProvider,$urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise("/");

    $urlMatcherFactoryProvider.strictMode(false)

    stateHelperProvider.state({
        name: "home",
        url: "/",
        templateUrl: "ngMain/components/home/main.html",
        controller: "MainController"

    }).state({
        name: "explorer",
        url: "/explorer",
        templateUrl: "ngMain/components/explorer/explorer.html",
        controller: "ExplorerController"

    }).state({
        name: "search",
        url: "/search",
        templateUrl: "ngMain/components/search/search.html",
        controller: "SearchController"

    }).state({
        name: "searchIndividual",
        url: "/searchIndividual",
        templateUrl: "ngMain/components/search/searchIndividual.html",
        controller: "SearchIndividualController"

    }).state({
            name: "searchLocation",
            url: "/searchLocation",
            templateUrl: "ngMain/components/search/searchLocation.html",
            controller: "SearchLocationController"

    }).state({
        name: "explore",
        url: "/explore",
        templateUrl: "ngMain/components/explore/explore.html",
        controller: "SelectedController"


    }).state({
        name: "explore.locHier",
        url: "/hierarchy",
        templateUrl:"ngMain/components/explore/details/locationHierarchy.html",
        controller: "LocationHierarchyController"

    }).state({
        name: "explore.loc",
        url: "/location",
        templateUrl:"ngMain/components/explore/details/location.html",
        controller: "LocationController"

    }).state({
        name: "explore.indiv",
        url: "/individual",
        templateUrl: "ngMain/components/explore/details/individual.html",
        controller: "IndividualController"

    }).state({
            name: "explore.socialGroup",
            url: "/socialGroup",
            templateUrl: "ngMain/components/explore/details/socialGroup.html",
            controller: "SocialGroupController"
        });



}]);


app.controller('MainController', ['$scope',function($scope){
    $scope.message="is working...";
}]);
