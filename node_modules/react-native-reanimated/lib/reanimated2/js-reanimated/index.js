import JSReanimated from './JSReanimated';
const reanimatedJS = new JSReanimated();
export const _updatePropsJS = (updates, viewRef) => {
    if (viewRef._component) {
        const component = viewRef._component;
        const [rawStyles] = Object.keys(updates).reduce((acc, key) => {
            const value = updates[key];
            const index = typeof value === 'function' ? 1 : 0;
            acc[index][key] = value;
            return acc;
        }, [{}, {}]);
        if (typeof component.setNativeProps === 'function') {
            setNativeProps(component, rawStyles);
        }
        else if (Object.keys(component.props).length > 0) {
            Object.keys(component.props).forEach((key) => {
                if (!rawStyles[key]) {
                    return;
                }
                const dashedKey = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
                component._touchableNode.setAttribute(dashedKey, rawStyles[key]);
            });
        }
        else {
            console.warn('It is not possible to manipulate component');
        }
    }
};
const setNativeProps = (component, style) => {
    const previousStyle = component.previousStyle ? component.previousStyle : {};
    const currentStyle = Object.assign(Object.assign({}, previousStyle), style);
    component.previousStyle = currentStyle;
    component.setNativeProps({ style: currentStyle });
};
export default reanimatedJS;
