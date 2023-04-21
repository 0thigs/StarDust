import { runOnUI } from '../core';
import { prepareUIRegistry } from './FrameCallbackRegistryUI';
export default class FrameCallbackRegistryJS {
    constructor() {
        this.nextCallbackId = 0;
        prepareUIRegistry();
    }
    registerFrameCallback(callback) {
        if (!callback) {
            return -1;
        }
        const callbackId = this.nextCallbackId;
        this.nextCallbackId++;
        runOnUI(() => {
            'worklet';
            global._frameCallbackRegistry.registerFrameCallback(callback, callbackId);
        })();
        return callbackId;
    }
    unregisterFrameCallback(callbackId) {
        runOnUI(() => {
            'worklet';
            global._frameCallbackRegistry.unregisterFrameCallback(callbackId);
        })();
    }
    manageStateFrameCallback(callbackId, state) {
        runOnUI(() => {
            'worklet';
            global._frameCallbackRegistry.manageStateFrameCallback(callbackId, state);
        })();
    }
}
