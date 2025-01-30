import mm from 'micromatch';
const addDirective = ({ directive = "'use client';", pattern = '**/*', options } = {}) => {
    return {
        name: 'rollup-plugin-add-directive',
        banner: ({ name }) => (mm.isMatch(name, pattern, options) ? directive : '')
    };
};
export { addDirective };
