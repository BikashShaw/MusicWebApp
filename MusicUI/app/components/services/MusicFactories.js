/**
 * Created by Bikash on 2/28/2016.
 */
app.factory("musicAdd", ["$resource", "musicAppConfig", function ($resource, musicAppConfig) {
    return $resource(musicAppConfig.rest_url_add, {},
        {
            create: {method: "POST"}
        }
    );
}]);

app.factory("musicUpdate", ["$resource", "musicAppConfig", function ($resource, musicAppConfig) {
    return $resource(musicAppConfig.rest_url_update, {},
        {
            update: {method: "POST"}
        }
    );
}]);

app.factory("musicList", ["$resource", "musicAppConfig", function($resource, musicAppConfig) {
    return $resource(musicAppConfig.rest_url_list);
}]);

app.factory("musicGetById", ["$resource", "musicAppConfig", function ($resource, musicAppConfig) {
    return $resource(musicAppConfig.rest_url_findbyid,  {id:'@id'});
}]);

app.factory("musicDelete", ["$resource", "musicAppConfig", function ($resource, musicAppConfig) {
    return $resource(musicAppConfig.rest_url_deletebyid,  {id:'@id'},
        {
            update : {method: "DELETE"}
        }
    );
}]);