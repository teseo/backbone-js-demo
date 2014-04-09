define(
    ['jquery','lodash','backbone'],
    function ($, _, Backbone){

        YoutubeView = Backbone.View.extend({
            el: $('#container'),
            initialize: function (){
                this.render();
            },
            render: function(){
                var template = _.template(tpl.get('youtube'), {});
                this.$el.html(template);
            }
        });
        return YoutubeView;
    }
);

