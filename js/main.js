/**
 * main app file
 * @author Javier Mellado <sol@javiermellado.com>
 *
 */
require(
    // Load the minium necessary elements to make the default page works
    ['jquery','lodash','backbone', 'utils/tpl'],
    function($, _, Backbone, tpl){
        MyRouter = Backbone.Router.extend({
            //set the routes of our one page site
            routes: {
                "": "loadDefault",
                "facebook": "loadFacebook",
                "youtube": "loadYoutube"
            },

            //functionality of each page
            loadFacebook: function(){
                //load Facebook view in a lazy way
                require(['views/facebookView'], function(){
                    //load Facebook template in a lazy way once the view is loaded
                    tpl.loadTemplates(['facebook'], function(){
                        new FacebookView();
                    });
                });
            },

            loadDefault: function(){
                //load Default view and template in a lazy way
                require(['views/defaultView'], function(){
                    //load Default template in a lazy way once the view is loaded
                    tpl.loadTemplates(['default'], function(){
                        new DefaultView();
                    });
                });

            },
            loadYoutube: function(){
                //load Youtube view in a lazy way
                require(['views/youtubeView'], function(){
                    //load Youtube template in a lazy way once the view is loaded
                    tpl.loadTemplates(['youtube'], function(){
                        new YoutubeView();
                    });
                });

            }
        });
        //let's start the party
        new MyRouter();
        Backbone.history.start();
    }
);

