/**
 * Template render util
 * this element will be the one in charge of template rendering
 * @author Javier Mellado <sol@javiermellado.com>
 *
 */

define(
    ['jquery'],
    function ($){
        tpl = {
            templates: {},

            loadTemplates: function (names, callback){

                var that = this;
                var loadTemplate = function(index){
                    var name = names[index];
                    $.get('templates/' + name + '.html', function (data){
                        that.templates[name] = data;
                        index++;
                        if (index < names.length){
                            loadTemplate(index);
                        } else {
                            callback();
                        }

                    });
                }
                loadTemplate(0);
            },
            get: function(name){
                return this.templates[name]
            }
        };
        return tpl;
    }
);