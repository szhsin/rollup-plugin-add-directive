import { Plugin } from 'rollup';
import { Options } from 'micromatch';
export interface PluginOptions {
    directive?: string;
    pattern?: string | readonly string[];
    options?: Options;
}
declare const addDirective: ({ directive, pattern, options }?: PluginOptions) => Plugin;
export { addDirective };
