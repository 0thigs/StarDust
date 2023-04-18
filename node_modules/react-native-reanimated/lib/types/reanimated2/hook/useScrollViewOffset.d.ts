import { RefObject } from 'react';
import type Animated from 'react-native-reanimated';
import { SharedValue } from '../commonTypes';
export declare function useScrollViewOffset(aref: RefObject<Animated.ScrollView>): SharedValue<number>;
