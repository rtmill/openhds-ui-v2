angular.module('HierarchyModule',[
        'ServicesModule'

    ]
    )
    .controller('HierarchyCtrl', [
        '$scope',
        'HierarchyData',
        'HierarchyLevels',
        'HierarchyLevels2',
        'LocationsOfHierarchy',
        'IndividualsOfHierarchy',

        function($scope, HierarchyData, HierarchyLevels, HierarchyLevels2, LocationsOfHierarchy, IndividualsOfHierarchy) {
            $scope.locHierarchies = HierarchyData.query();

            $scope.levels = HierarchyLevels.query();


            $scope.levelMap = {};



            $scope.makeLevelMap = function(){
                var tmp = angular.copy($scope.levels)

                for(i=0;i < tmp.length;i++){
                    $scope.levelMap[tmp[i].uuid] = tmp[i].name;
                }

            }



            $scope.selectHierarchy = function(lh){
                lh.level.name = $scope.levelMap[lh.level.uuid];
                $scope.setSelected(lh);
            }








            $scope.locations = null;

            $scope.getLocations = function(){
                $scope.locations = LocationsOfHierarchy.query({uuid:$scope.currLocHier.uuid});
                $scope.makeLevelMap();
            }

            $scope.individuals = null;

            $scope.getIndividuals = function(){
                $scope.individuals = IndividualsOfHierarchy.query({uuid:$scope.currLocHier.uuid});
            }







        }]);