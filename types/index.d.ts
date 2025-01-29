import { Plugin } from 'rollup';
import { Options } from 'micromatch';
export interface PluginOptions {
    pattern?: string | readonly string[];
    options?: Options;
    directive?: string;
}
declare const addDirective: ({ pattern, options, directive }?: PluginOptions) => Plugin;
export { addDirective };
