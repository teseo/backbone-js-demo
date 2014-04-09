define(
    ['jquery','lodash','backbone'],
    function ($, _, Backbone){

        FacebookView = Backbone.View.extend({
            el: $('#container'),
            initialize: function (){
                this.render();
            },
            render: function(){
                var template = _.template(tpl.get('facebook'), {});
                this.$el.html(template);
            }
        });
        return FacebookView;
    }
);

