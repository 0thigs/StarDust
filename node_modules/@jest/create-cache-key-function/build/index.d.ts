/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {Config} from '@jest/types';

declare function createCacheKey(
  files?: Array<string>,
  values?: Array<string>,
): GetCacheKeyFunction;
export default createCacheKey;

declare type GetCacheKeyFunction =
  | OldGetCacheKeyFunction
  | NewGetCacheKeyFunction;

declare type NewCacheKeyOptions = {
  config: Config.ProjectConfig;
  configString: string;
  instrument: boolean;
};

declare type NewGetCacheKeyFunction = (
  sourceText: string,
  sourcePath: string,
  options: NewCacheKeyOptions,
) => string;

declare type OldCacheKeyOptions = {
  config: Config.ProjectConfig;
  instrument: boolean;
};

declare type OldGetCacheKeyFunction = (
  fileData: string,
  filePath: string,
  configStr: string,
  options: OldCacheKeyOptions,
) => string;

export {};
