require.config({
    deps: ['main'],
    baseUrl: "js",
    paths: {
        // init the elements we want to load and use through the app
        "jquery": "lib/jquery.min",
        "lodash": "lib/lodash.min",
        "backbone": "lib/backbone.min",
        "youtubeAuth": "services/youtube/auth",
        "videoModel": "models/youtube/videoModel",
        "videoCollection": "collections/youtube/videoCollection"
    },
    shim: {
        backbone: {
            deps: ["lodash", "jquery"],
            exports: "Backbone"
        }
    }
});