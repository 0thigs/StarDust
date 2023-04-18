import { Component } from 'react';
import { RefObjectFunction } from './hook/commonTypes';
export interface ComponentCoords {
    x: number;
    y: number;
}
/**
 * Given an absolute position and a component ref, returns the relative
 * position in the component's local coordinate space.
 */
export declare function getRelativeCoords(parentRef: RefObjectFunction<Component>, absoluteX: number, absoluteY: number): ComponentCoords | null;
