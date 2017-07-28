var VrWrapper = (function () {
    me = this;
    function RegisterComponentWithAFrame(title, obj) 
    {
        var aFrameObj = {};
        if (obj.dependencies){
            aFrameObj.dependencies = obj.dependencies;
        }

        if (obj.schema){
            aFrameObj.schema = obj.schema;
        }

        if (obj.init){
            aFrameObj.init =  function () {
                var elem = this;
                obj.init(elem);
            }
        }

        if (obj.update){
            aFrameObj.update =  function () {
                var elem = this;
                obj.update(elem);
            }
        }

        if (obj.tick){
            aFrameObj.tick =  function () {
                var elem = this;
                obj.tick(elem);
            }
        }

        if (obj.remove){
            aFrameObj.remove =  function () {
                var elem = this;
                obj.remove(elem);
            }
        }

        if (obj.pause){
            aFrameObj.pause =  function () {
                var elem = this;
                obj.pause(elem);
            }
        }

        if (obj.play){
            aFrameObj.play =  function () {
                var elem = this;
                obj.play(elem);
            }
        }

        if (obj.updateSchema) {
            aFrameObj.updateSchema = function () {
                var elem = this;
                obj.updateSchema(elem);
            }
        }
        
        AFRAME.registerComponent(title, aFrameObj);
    }

    return {
        RegisterComponent: function (title, obj) {
            return RegisterComponentWithAFrame(title, obj);
        }
    }
})();

