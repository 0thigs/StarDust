declare type CallbackDetails = {
    callback: (frameInfo: FrameInfo) => void;
    startTime: number | null;
};
export declare type FrameInfo = {
    timestamp: number;
    timeSincePreviousFrame: number | null;
    timeSinceFirstFrame: number;
};
export interface FrameCallbackRegistryUI {
    frameCallbackRegistry: Map<number, CallbackDetails>;
    activeFrameCallbacks: Set<number>;
    previousFrameTimestamp: number | null;
    runCallbacks: () => void;
    registerFrameCallback: (callback: (frameInfo: FrameInfo) => void, callbackId: number) => void;
    unregisterFrameCallback: (callbackId: number) => void;
    manageStateFrameCallback: (callbackId: number, state: boolean) => void;
}
export declare const prepareUIRegistry: () => void;
export {};
