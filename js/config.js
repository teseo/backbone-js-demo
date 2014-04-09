require.config({
    deps: ['main'],
    baseUrl: "js",
    paths: {
        "jquery": "lib/jquery.min",
        "lodash": "lib/lodash.min",
        "backbone": "lib/backbone.min"
    },
    shim: {
        backbone: {
            deps: ["lodash", "jquery"],
            exports: "Backbone"
        }
    }
});