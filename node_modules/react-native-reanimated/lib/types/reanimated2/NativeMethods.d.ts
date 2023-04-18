import { Component } from 'react';
import { MeasuredDimensions } from './commonTypes';
import { RefObjectFunction } from './hook/commonTypes';
export declare function getTag(view: null | number | React.Component<any, any> | React.ComponentClass<any>): null | number;
export declare let measure: (animatedRef: RefObjectFunction<Component>) => MeasuredDimensions | null;
export declare let scrollTo: (animatedRef: RefObjectFunction<Component>, x: number, y: number, animated: boolean) => void;
export declare function setGestureState(handlerTag: number, newState: number): void;
