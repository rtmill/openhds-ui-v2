angular.module('IndividualModule',[
        'ServicesModule'

    ]
    )
    .controller('IndividualCtrl', [
        '$scope',
        'HateoasEntity',

        function($scope, HateoasEntity) {
            $scope.assoc = $scope.currIndividual.link;

            $scope.resid = [];
            $scope.memberships = [];
            $scope.relA = [];
            $scope.relB = [];


            for (i = 0; i < $scope.assoc.length; i++){
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "residencies"){
                    var res = HateoasEntity.query({domain:"residencies",val:result});
                    $scope.resid.push(res);
                }
                else if ($scope.assoc[i].rel == "memberships"){
                    var res = HateoasEntity.query({domain:"memberships",val:result});
                    $scope.memberships.push(res);
                }
                else if ($scope.assoc[i].rel == "relationshipsasindividuala"){
                    var res = HateoasEntity.query({domain:"relationships",val:result});
                    $scope.relA.push(res);
                }
                else if ($scope.assoc[i].rel == "relationshipsasindividualb"){
                    var res = HateoasEntity.query({domain:"relationships",val:result});
                    $scope.relB.push(res);
                }
            }

            $scope.indivSubmit = {};




            $scope.setTemp = function(){
                $scope.tempIndiv = angular.copy($scope.currIndividual);
            }

            $scope.saveIndividual = function(){
                var temp = angular.copy($scope.tempIndiv);

                // Placeholder

                $scope.indivSubmit.registrationVersion = 1;
                $scope.indivSubmit.registrationVersionName = 'registrationVersionName';
                $scope.indivSubmit.registrationDateTime = temp.collectionDateTime;
                $scope.indivSubmit.registrationSystemName = 'systemName';
                $scope.indivSubmit.collectedByUuid = "currentUser";



                $scope.indivSubmit.individual = {
                    'uuid': temp.uuid,
                    'entityStatus': temp.entityStatus,
                    'collectedBy': temp.collectedBy,
                    'collectionDateTime': temp.collectionDateTime,
                    'extId': temp.extId,
                    'firstName': temp.firstName,
                    'gender': temp.gender
                }

            }











        }]);