import React from 'react';
import { FlatListProps } from 'react-native';
import { ILayoutAnimationBuilder } from '../layoutReanimation/animationBuilder/commonTypes';
export interface ReanimatedFlatListProps<ItemT> extends FlatListProps<ItemT> {
    itemLayoutAnimation?: ILayoutAnimationBuilder;
}
declare type ReanimatedFlatListFC<T = any> = React.FC<ReanimatedFlatListProps<T>>;
declare const ReanimatedFlatlist: ReanimatedFlatListFC;
export default ReanimatedFlatlist;
