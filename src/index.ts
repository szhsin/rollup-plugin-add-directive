import { Plugin } from 'rollup';
const addDirective = (): Plugin => {
  return {
    name: 'rollup-plugin-add-directive'
  };
};
export { addDirective };
