/**
 * Video Collection
 *
 * very simple collection as it will be just used as model container to be rendered in template
 *
 * @author Javier Mellado <sol@javiermellado.com>
 */

define(
    //required backbone and videoModel
    ['backbone','videoModel'],
    function (Backbone, video){
        return Backbone.Collection.extend({
            model: video
        });
    }
);