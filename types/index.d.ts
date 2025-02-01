import { Plugin } from 'rollup';
import { Options } from 'micromatch';
export interface PluginOptions {
    /**
     * @default "'use client';"
     */
    directive?: string;
    /**
     * Glob pattern
     */
    pattern?: string | readonly string[];
    /**
     * The options from micromatch
     * @link https://github.com/micromatch/micromatch?tab=readme-ov-file#options
     */
    options?: Options;
}
declare const addDirective: ({ directive, pattern, options }?: PluginOptions) => Plugin;
export { addDirective };
