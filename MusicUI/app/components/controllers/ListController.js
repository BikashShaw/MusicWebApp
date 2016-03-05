/**
 * Created by Bikash on 2/27/2016.
 */
angular.module('musicApp').controller("listController", ["$scope", "$location", "$routeParams",  "musicList",
    function($scope, $location, $routeParams,  musicList) {

        $scope.data = musicList.query(function(d) {
            $scope.data = d;
        });

        $scope.addArtist = function() {
            $location.path("/Items/add");
        };

        $scope.editItem = function(id) {
            $location.path("/Items/" + id);
        };
    }
]);