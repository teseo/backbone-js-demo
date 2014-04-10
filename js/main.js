/**
 * main app file
 * @author Javier Mellado <sol@javiermellado.com>
 *
 */
require(
    // Load the necessary elements to make the page works
    ['jquery','lodash','backbone', 'views/facebookView', 'views/defaultView', 'views/youtubeView', 'utils/tpl'],
    function($, _, Backbone, FacebookView, DefaultView, YoutubeView, tpl){
        MyRouter = Backbone.Router.extend({
            //set the routes of our one page site
            routes: {
                "": "loadDefault",
                "facebook": "loadFacebook",
                "youtube": "loadYoutube"
            },

            //functionality of each page
            loadFacebook: function(){
                new FacebookView();
            },

            loadDefault: function(){
                new DefaultView();
            },

            loadYoutube: function(){
                new YoutubeView();
            }
        });
        //once templates are loaded, let's start the party
        tpl.loadTemplates(['default', 'youtube', 'facebook','youtubeSearchResult'], function(){
            var router = new MyRouter();
            Backbone.history.start();
        });
    }
);

