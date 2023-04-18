import { runOnUI } from '../core';
export const prepareUIRegistry = runOnUI(() => {
    'worklet';
    const frameCallbackRegistry = {
        frameCallbackRegistry: new Map(),
        activeFrameCallbacks: new Set(),
        previousFrameTimestamp: null,
        runCallbacks() {
            const loop = (timestamp) => {
                if (this.previousFrameTimestamp === null) {
                    this.previousFrameTimestamp = timestamp;
                }
                const delta = timestamp - this.previousFrameTimestamp;
                this.activeFrameCallbacks.forEach((callbackId) => {
                    const callbackDetails = this.frameCallbackRegistry.get(callbackId);
                    const { startTime } = callbackDetails;
                    if (startTime === null) {
                        // First frame
                        callbackDetails.startTime = timestamp;
                        callbackDetails.callback({
                            timestamp,
                            timeSincePreviousFrame: null,
                            timeSinceFirstFrame: 0,
                        });
                    }
                    else {
                        // Next frame
                        callbackDetails.callback({
                            timestamp,
                            timeSincePreviousFrame: delta,
                            timeSinceFirstFrame: timestamp - startTime,
                        });
                    }
                });
                if (this.activeFrameCallbacks.size > 0) {
                    this.previousFrameTimestamp = timestamp;
                    requestAnimationFrame(loop);
                }
                else {
                    this.previousFrameTimestamp = null;
                }
            };
            // runCallback() should only be called after registering a callback,
            // so if there is only one active callback, then it means that there were
            // zero previously and the loop isn't running yet.
            if (this.activeFrameCallbacks.size === 1) {
                requestAnimationFrame(loop);
            }
        },
        registerFrameCallback(callback, callbackId) {
            this.frameCallbackRegistry.set(callbackId, {
                callback: callback,
                startTime: null,
            });
        },
        unregisterFrameCallback(callbackId) {
            this.manageStateFrameCallback(callbackId, false);
            this.frameCallbackRegistry.delete(callbackId);
        },
        manageStateFrameCallback(callbackId, state) {
            if (callbackId === -1) {
                return;
            }
            if (state) {
                this.activeFrameCallbacks.add(callbackId);
                this.runCallbacks();
            }
            else {
                const callback = this.frameCallbackRegistry.get(callbackId);
                callback.startTime = null;
                this.activeFrameCallbacks.delete(callbackId);
            }
        },
    };
    global._frameCallbackRegistry = frameCallbackRegistry;
});
