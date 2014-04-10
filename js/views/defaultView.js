/**
 * Dummy template
 * @author Javier Mellado <sol@javiermellado.com>
 *
 */
define(
    ['jquery','lodash','backbone'],
    function (){
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

