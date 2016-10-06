angular.module('ExploreModule', ['HierarchyModule'])


    // Far left column
    .controller('SelectedCtrl', ['$scope', '$state',
        function ($scope, $state) {
            $scope.exploreMessage = "EXPLORE : working";

            $scope.sel = "HIERARCHY_ROOT";
            $scope.currLocHier = null;
            $scope.currLocation = null;
            $scope.currIndividual = null;
            $scope.currResidency = null;
            $scope.currMembership = null;
            $scope.currRelationship = null;
            $scope.currSocialGroup = null;

            $scope.setSelected = function(locHier){
                if(locHier){
                    $scope.sel = locHier.uuid;
                    $scope.currLocHier = locHier;
                    $scope.addToSelected(locHier);
                }else{
                    $scope.sel = "HIERARCHY_ROOT";
                    $scope.currLocHier = null;
                }

            }


            $scope.selectedList = [];

            $scope.addToSelected = function(item){
                $scope.selectedList.push(item);
            }

            $scope.changeSelected = function(num){

                    $scope.selectedList = $scope.selectedList.slice(0, num);
                    $scope.setSelected($scope.selectedList.pop());
                    $scope.comps[1].expanded = false;
                    $scope.comps[2].expanded = false;

                    if(!$state.is("explore.locHier")){
                        $state.go("explore.locHier");
                    }



            }




            $scope.comps = [
                {name: "Children", expanded: true},
                {name: "Locations", expanded: false},
                {name: "Individuals", expanded: false}
            ];

            $scope.setExpanded = function(i, val){
                $scope.comps[i].expanded = val;
            }


            $scope.selectLocation = function(loc){
                if (loc){
                    $state.go("explore.location");
                }
                else{
                    $scope.comps[1].expanded = false;
                    $scope.comps[2].expanded = false;
                    $state.go("explore.locHier");
                }
                $scope.currLocation = loc;
            }

            $scope.selectIndividual = function(indi){
                if(indi){
                    $state.go("explore.individual");
                }
                else{
                    $scope.comps[1].expanded = false;
                    $scope.comps[2].expanded = false;
                    $state.go("explore.locHier");
                }
                $scope.currIndividual = indi;
            }



            $scope.selectResidency = function(res){
                if (res){
                    $state.go("explore.residency");
                }
                else{
                    $state.go("explore.locHier");
                }
                $scope.currResidency = res;
            }



            $scope.selectRelationship = function(rel){
                if (rel){
                    $state.go("explore.relationship");
                }
                else{
                    $state.go("explore.locHier");
                }
                $scope.currRelationship = rel;
            }

            $scope.selectResidency = function(res){
                if (res){
                    $state.go("explore.residency");
                }
                else{
                    $state.go("explore.locHier");
                }
                $scope.currResidency = res;
            }

            $scope.selectMembership = function(mem){
                if (mem){
                    $state.go("explore.membership");
                }
                else{
                    $state.go("explore.locHier");
                }
                $scope.currMembership = mem;
            }



            $scope.selectSocialGroup = function(sg){
                if (sg){
                    $state.go("explore.socialGroup");
                }
                else{
                    $state.go("explore.locHier");
                }
                $scope.currSocialGroup = sg;
            }



        }])

;
