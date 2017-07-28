declare const VrWrapper: VR.AFrameWrapper;

declare namespace VR {
    interface AFrameWrapper {
        RegisterComponent(name: string, component: ComponentDefinition): AFrame.ComponentConstructor;
    }


}