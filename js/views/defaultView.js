define(
    ['jquery','lodash','backbone'],
    function ($, _, Backbone){

        DefaultView = Backbone.View.extend({
            el: $('#container'),
            initialize: function (){
                this.render();
            },
            render: function(){
                var template = _.template(tpl.get('default'), {});
                this.$el.html(template);
            }
        });
        return DefaultView;
    }
);

