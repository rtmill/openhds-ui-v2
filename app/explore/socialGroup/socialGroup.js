angular.module('SocialGroupModule',[
        'ServicesModule'

    ]
)
    .controller('SocialGroupCtrl', [
        '$scope',
        'HateoasEntity',

        function($scope, HateoasEntity) {
            $scope.assoc = $scope.currSocialGroup.link;

            $scope.memberships = [];

            for (i = 0; i < $scope.assoc.length; i++) {
                var temp = $scope.assoc[i].href;
                var n = temp.lastIndexOf('/');
                var result = temp.substring(n + 1);
                if ($scope.assoc[i].rel == "memberships") {
                    var res = HateoasEntity.query({domain: "memberships", val: result});
                    $scope.memberships.push(res);
                }
            }



        }]);