import { useEffect, useRef } from 'react';
import { findNodeHandle } from 'react-native';
import { useEvent } from './utils';
import { useSharedValue } from './useSharedValue';
const subscribeForEvents = [
    'onScroll',
    'onScrollBeginDrag',
    'onScrollEndDrag',
    'onMomentumScrollBegin',
    'onMomentumScrollEnd',
];
export function useScrollViewOffset(aref) {
    const offsetRef = useRef(useSharedValue(0));
    const event = useEvent((event) => {
        'worklet';
        offsetRef.current.value =
            event.contentOffset.x === 0
                ? event.contentOffset.y
                : event.contentOffset.x;
    }, subscribeForEvents);
    useEffect(() => {
        var _a;
        const viewTag = findNodeHandle(aref.current);
        (_a = event.current) === null || _a === void 0 ? void 0 : _a.registerForEvents(viewTag);
    }, [aref.current]);
    return offsetRef.current;
}
