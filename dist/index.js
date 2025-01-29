import mm from 'micromatch';
const addDirective = ({ pattern = '**/*', options, directive = "'use client';" } = {}) => {
    return {
        name: 'rollup-plugin-add-directive',
        banner: ({ name }) => (mm.isMatch(name, pattern, options) ? directive : '')
    };
};
export { addDirective };
