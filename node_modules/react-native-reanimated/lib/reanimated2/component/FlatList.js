var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';
import ReanimatedView from './View';
import createAnimatedComponent from '../../createAnimatedComponent';
const AnimatedFlatList = createAnimatedComponent(FlatList);
const createCellRenderer = (itemLayoutAnimation) => {
    const cellRenderer = (props) => {
        return (<ReanimatedView layout={itemLayoutAnimation} onLayout={props.onLayout}>
        {props.children}
      </ReanimatedView>);
    };
    return cellRenderer;
};
const ReanimatedFlatlist = forwardRef((props, ref) => {
    const { itemLayoutAnimation } = props, restProps = __rest(props, ["itemLayoutAnimation"]);
    const cellRenderer = React.useMemo(() => createCellRenderer(itemLayoutAnimation), []);
    return (<AnimatedFlatList ref={ref} {...restProps} CellRendererComponent={cellRenderer}/>);
});
export default ReanimatedFlatlist;
