namespace VR {


    //********************* create onclick event **************************
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

    //********************* create hover color change **************************
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
}