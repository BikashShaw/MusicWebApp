/**
 * Created by Bikash on 2/27/2016.
 */
angular.module('musicApp').controller("editController", ["$scope", "$location", "$routeParams", "musicGetById", "musicUpdate", "musicDelete",
    function($scope, $location, $routeParams, musicGetById , musicUpdate, musicDelete) {

        $scope.sortField = 'name';

        musicGetById.get({"id" : $routeParams.id}, function(d) {
            $scope.Item = d;
        });

        $scope.save = function() {
            var music = { id:$scope.Item.id, name: $scope.Item.name, genre: $scope.Item.genre, rating: $scope.Item.rating, price: $scope.Item.price};
            musicUpdate.save(music, function(d) {
                $location.path("/Items");
            });
        };

        $scope.cancel = function() {
            $location.path("/Items");
        };

        $scope.removeItem = function(){

            musicDelete.update({"id" : $routeParams.id}, function(d) {
                $location.path("/Items");
            });
        };

    }
]);