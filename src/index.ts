import { Plugin } from 'rollup';
import mm, { Options } from 'micromatch';

export interface PluginOptions {
  pattern?: string | readonly string[];
  options?: Options;
  directive?: string;
}

const addDirective = ({
  pattern = '**/*',
  options,
  directive = "'use client';"
}: PluginOptions = {}): Plugin => {
  return {
    name: 'rollup-plugin-add-directive',
    banner: ({ name }) => (mm.isMatch(name, pattern, options) ? directive : '')
  };
};

export { addDirective };
