/**
 * Created by Bikash on 2/27/2016.
 */

angular.module('musicApp').controller("addController", ["$scope", "$location", "$routeParams",  "musicAdd",
    function($scope, $location, $routeParams, musicAdd) {

        $scope.save = function() {

            var music = { id:0, name: $scope.Item.name, genre: $scope.Item.genre, rating: $scope.Item.rating, price: $scope.Item.price};
            musicAdd.create(music, function(d) {
                $location.path("/Items");
            });
        };

        $scope.cancel = function() {
            $location.path("/Items");
        };
    }
]);
