angular.module('RelationshipModule',[
        'ServicesModule'

    ]
)
    .controller('RelationshipCtrl', [
        '$scope',
        'HateoasEntity',

        function($scope, HateoasEntity) {
            $scope.assoc = $scope.currRelationship.link;

            $scope.indivA = [];
            $scope.indivB = [];

            for (i = 0; i < $scope.assoc.length; i++){
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "individuala"){
                    var res = HateoasEntity.query({domain:"individuals",val:result});
                    $scope.indivA.push(res);
                }
                else if ($scope.assoc[i].rel == "individualb"){
                    var res = HateoasEntity.query({domain:"individuals",val:result});
                    $scope.indivB.push(res);
                }
            }

        }]);