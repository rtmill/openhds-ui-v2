angular.module('MembershipModule',[
        'ServicesModule'

    ]
)
    .controller('MembershipCtrl', [
        '$scope',
        'HateoasEntity',

        function($scope, HateoasEntity) {
            $scope.assoc = $scope.currMembership.link;

            $scope.indiv = [];
            $scope.socGroups = [];

            for (i = 0; i < $scope.assoc.length; i++){
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "individual"){
                    var res = HateoasEntity.query({domain:"individuals",val:result});
                    $scope.indiv.push(res);
                }
                else if ($scope.assoc[i].rel == "socialgroup"){
                    var res = HateoasEntity.query({domain:"socialGroups",val:result});
                    $scope.socGroups.push(res);
                }
            }

        }]);