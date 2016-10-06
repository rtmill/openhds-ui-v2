angular.module('ServicesModule',[
        'ngResource'


    ])
    .factory('HierarchyData', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locationHierarchies/bulk', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: true,
                    withCredentials: true
                }
            })
        }])
    .factory('LocationsBulk', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locations/bulk', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: true,
                    withCredentials: true
                }
            })
        }])
    .factory('HierarchyLevels', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locationHierarchyLevels/bulk', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: true,
                    withCredentials: true
                }
            })
        }])
    .factory('LocationsOfHierarchy', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locations/bylocationhierarchy/?locationHierarchyUuid=:uuid', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: false,
                    withCredentials: true
                }
            })
        }])
    .factory('IndividualsOfHierarchy', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/individuals/bylocationhierarchy/?locationHierarchyUuid=:uuid', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: false,
                    withCredentials: true
                }
            })
        }])
    .factory('HateoasEntity', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/:domain/:val', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: false,
                    withCredentials: true
                }
            })
        }])



    .factory('HierarchyLevels2', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locationHierarchyLevels', {}, {
                query: {
                    method: 'GET',
                    format: '.json',
                    isArray: false,
                    withCredentials: true
                }
            })
        }])


    .factory('SendRegistration', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/locations/91b66edd-fb52-444e-ae10-8bfb19a01046', {}, {
                save: {
                    method: 'PUT',
                    params: {
                        registration:{
                        "registrationVersion": 1,
                        "registrationVersionName": "registrationVersionName",
                        "registrationDateTime": "2016-09-07T19:15:16.949Z[UTC]",
                        "registrationSystemName": "systemName",
                        "collectedByUuid": "currentUser",
                        "location": {
                            "uuid": "91b66edd-fb52-444e-ae10-8bfb19a01046",
                            "collectedBy": {
                                "uuid": "UNKNOWN"
                            },
                            "collectionDateTime": "2016-09-07T19:15:16.949Z[UTC]",
                            "extId": "location-1",
                            "name": "ARRRRRRRRRRRR",
                            "type": "RURAL",
                            "locationHierarchy": {
                                "uuid": "aec5c37c-45d2-44f0-afd3-e271f79564b3"
                            }
                        },
                        "locationHierarchyUuid": "aec5c37c-45d2-44f0-afd3-e271f79564b3"
                    }},
                    format: '.json',
                    isArray: false,
                    withCredentials: true
                }
            })
        }])


    .factory("CustomPut", [$resource,
        function($resource){
        return $resource('http://localhost:8080/locations/91b66edd-fb52-444e-ae10-8bfb19a01046', {},
            {
                get : {method:'GET'},
                update: {method:'PUT'}

            });
    }]);


;
;
