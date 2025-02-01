import { Plugin } from 'rollup';
import mm, { Options } from 'micromatch';

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

const addDirective = ({
  directive = "'use client';",
  pattern,
  options
}: PluginOptions = {}): Plugin => {
  return {
    name: 'rollup-plugin-add-directive',
    banner: pattern
      ? ({ name }) => (mm.isMatch(name, pattern, options) ? directive : '')
      : directive
  };
};

export { addDirective };
