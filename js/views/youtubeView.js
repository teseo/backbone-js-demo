/**
 * Load Youtube view
 *
 * Display a search text input and query youtube api
 *
 * To be able use the youtube api a login and grant permission is required
 * once logged in the search button will be enabled
 *
 * Search Result will be rendered in a template before injected in this view
 *
 * @author Javier Mellado <sol@javiermellado.com>
 *
 */
define(
    // define elements loaded in the app that are needed in  this view
    // (fameworks, video Authentication, video Model and video Collection)
    ['videoModel','videoCollection','youtubeAuth','jquery','lodash','backbone'],
    function (Video, VideoCollection){

        YoutubeView = Backbone.View.extend({
            el: $('#container'),
            //constructor - init function
            initialize: function (){
                this.render();
            },
            // events attachment
            events: {
                // when search button clicked, searchHandler will be triggered
                "click #search-button" : "searchHandler"
            },
            //render the template into the Container Dom Element
            render: function(){
                var template = _.template(tpl.get('youtube'), {});
                this.$el.html(template);
            },
            /**
             * Retrieve the input value, query youtube search api, collect results and inject them into the
             * Container Dom Elemnt
             */
            searchHandler: function(){
                //input search text
                var q = $('#query').val();
                //init youtube list search request with given criteria
                var request = gapi.client.youtube.search.list({
                    q: q,
                    part: 'snippet'
                });
                //execute the youtube request
                request.execute(function(response) {
                    //we need this array to store the video model list into a collection
                    var videoList = [];
                    //loop the response to insert the results into video models
                    $.each(response.result.items, function(position,videoData){
                        //init the video Model
                        var video = new Video();
                        //populate the videos info into the video models
                        video.set({
                            'url' : 'https://www.youtube.com/watch?v=' + videoData.id.videoId,
                            'title' : videoData.snippet.title,
                            'channelTitle' : videoData.snippet.channelTitle,
                            'description' : videoData.snippet.description,
                            'thumbnail' : videoData.snippet.thumbnails.medium.url
                        });
                        videoList[position] = video;
                    });
                    // populate the videos list into a video Collection
                    var videos = new VideoCollection(videoList);
                    // render the videoCollection into the search result template
                    var template = _.template(tpl.get('youtubeSearchResult'), {videos: videos.models});
                    // inject the template full of data into the search result container DOM Element
                    $('#search-container').html(template);
                });
            }
        });
        //return the view
        return YoutubeView;
    }
);

