angular.module('ResidencyModule',[
        'ServicesModule'

    ]
)
    .controller('ResidencyCtrl', [
        '$scope',
        'HateoasEntity',

        function($scope, HateoasEntity) {
            $scope.assoc = $scope.currResidency.link;

            $scope.indivs = [];
            $scope.locs = [];

            for (i = 0; i < $scope.assoc.length; i++){
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "individual"){
                    var res = HateoasEntity.query({domain:"individuals",val:result});
                    $scope.indivs.push(res);
                }
                else if ($scope.assoc[i].rel == "location"){
                    var res = HateoasEntity.query({domain:"locations",val:result});
                    $scope.locs.push(res);
                }
            }

        }]);