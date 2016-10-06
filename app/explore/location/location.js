angular.module('LocationModule',[
        'ServicesModule'

    ]
    )
    .controller('LocationCtrl', [
        '$scope',
        'HateoasEntity',
        'SendRegistration',

        function($scope, HateoasEntity, SendRegistration) {
            $scope.tempLoc = null;
            $scope.assoc = $scope.currLocation.link;

            $scope.setTemp = function(){
                $scope.tempLoc = angular.copy($scope.currLocation);
            }

            $scope.toSubmit = {
                'registrationVersion':1,
                'registrationVersionName':'registrationVersionName',
                'registrationDateTime':'TODO',
                'registrationSystemName':'systemName',
                'collectedByUuid':"currentUser"
            };




            $scope.resid = [];

            for (i = 0; i < $scope.assoc.length; i++){
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "residencies"){
                    var res = HateoasEntity.query({domain:"residencies",val:result});
                    $scope.resid.push(res);
                }
            }


           /* $scope.saveLocation = function(){
                $scope.currLocation = angular.copy($scope.tempLoc)
            }*/


            $scope.save = function(){
                var temp = angular.copy($scope.tempLoc);

                // Placeholder
                $scope.toSubmit.registrationDateTime = temp.collectionDateTime;


                $scope.toSubmit.location = {
                    'uuid': temp.uuid,
                    'entityStatus': temp.entityStatus,
                    'collectedBy': temp.collectedBy,
                    'collectionDateTime': temp.collectionDateTime,
                    'extId': temp.extId,
                    'name': temp.name,
                    'type': temp.type,
                    'locationHierarchy': temp.locationHierarchy
                }

                $scope.toSubmit.locationHierarchyUuid  = temp.locationHierarchy.uuid


            }

            $scope.saveLocation = function(){
                SendRegistration.save({val:$scope.toSubmit.uuid})
            }

















        }]);