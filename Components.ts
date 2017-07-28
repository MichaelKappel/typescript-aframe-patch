namespace VR {

    //export class LogComponent extends Component {
    //    constructor() {
    //        super();
    //        var me = this;
    //        //me.ComponentConstructed = AFRAME.registerComponent('log', me.GetDefinition());

    //    }

    //    public ComponentInit(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        console.log(data);
    //    }


    //}
    //export class LogDetailComponent extends Component {
    //    constructor() {
    //        super();
    //        var me = this;
    //    }

    //    public ComponentInit(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public ComponentUpdate(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public ComponentTick(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public ComponentRemove(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public ComponentPause(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public ComponentPlay(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data = element.data;
    //        me.LogProperties('element', element);
    //        me.LogProperties('el', el);
    //        me.LogProperties('schema', schema);
    //        me.LogProperties('data', data);
    //    }

    //    public LogProperties(title: string, arg: Object) {
    //        console.log('************ ' + title + ' ************');
    //        for (var prop in arg) {
    //            console.log(prop + '=' + arg[prop]);
    //        }
    //    }

    //}

    //********************* cursor-click **************************
    export class CursorClickComponent extends VR.Base.Component {
        constructor() {
            super('onclick')
        }

        public GetDefinition(): VR.ComponentDefinition {
            var me = this;
            return <VR.ComponentDefinition>{
                schema: {
                    type: 'string',
                },
                init: (elem: AFrame.Component) => {
                    me.ComponentInit(elem);
                },
            };
        }
        public ComponentInit(element: AFrame.Component): void {
            var me = this;
            var el = element.el;
            var schema = element.schema;
            var data: string = element.data;

            el.addEventListener('click', (evt: any) => {
                eval(data);
                console.log('I was clicked at: ', evt.detail.intersection.point);
            });
        }

    }

    export class HoverColorComponent extends VR.Base.Component {
        constructor() {
            super('hover-color');
            var me = this;
        }
        public GetDefinition(): VR.ComponentDefinition {
            var me = this;
            return <VR.ComponentDefinition>{
                schema: {
                    color: {
                        default: 'red'
                    },
                },
                init: (elem: AFrame.Component) => {
                    me.ComponentInit(elem);
                },
            };
        }
        public ComponentInit(element: any): void {
            var me = this;
            var el = element.el;
            var schema = element.schema;
            var data = element.data;
            var originalColor = el.getAttribute('material').color;
            el.addEventListener('mouseenter', () => {
                el.setAttribute('color', data.color);
            });

            el.addEventListener('mouseleave', () => {
                el.setAttribute('color', originalColor);
            });
        }
    }

    //export class HrefComponent extends Component {
    //    constructor() {
    //        super();
    //        var me = this;
    //    }

    //    public ComponentInit(element: any): void {
    //        var me = this;
    //        var el = element.el;
    //        var schema = element.schema;
    //        var data: string = element.data;
    //        element.addEventListener('click', (evt) => {
    //            window.location.href = element.data;
    //        });
    //    }
    //}
}