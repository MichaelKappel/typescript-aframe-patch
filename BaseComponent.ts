namespace VR {
    export interface ComponentDefinition {
        dependencies?: string[];
        el?: AFrame.Entity;
        id?: string;
        multiple?: boolean;
        schema?: AFrame.Schema;

        init?(arg: AFrame.Component): void;
        update?(oldData: any, arg: AFrame.Component): void;
        remove?(arg: AFrame.Component): void;
        tick?(time: number, timeDelta: number, arg: AFrame.Component): void;
        play?(arg: AFrame.Component): void;
        pause?(arg: AFrame.Component): void;
        updateSchema?(arg: AFrame.Component): void;
        remove?(arg: AFrame.Component): void;

        [key: string]: any;
    }

    export module Base {
        export abstract class Component {
            public ComponentConstructed: AFrame.ComponentConstructor;
            abstract GetDefinition(): ComponentDefinition

            constructor(propertyName: string) {
                var me = this;
                me.ComponentConstructed = VrWrapper.RegisterComponent(propertyName, me.GetDefinition());
            }

            public ComponentInit(elementInit: AFrame.Component): void {

            }
            public ComponentUpdate(oldData: any, elementInit: AFrame.Component): void {

            }
            public ComponentTick(time: number, timeDelta: number, elementInit: AFrame.Component): void {
            }

            public ComponentRemove(elementInit: AFrame.Component, schema, data): void {
            }

            public ComponentPause(elementInit: AFrame.Component, schema, data): void {
            }

            public ComponentPlay(elementInit: AFrame.Component, schema, data): void {

            }
        }
    }
}