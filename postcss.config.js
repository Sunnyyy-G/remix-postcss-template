/*
export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
*/

const config = {
    plugins: {
        'tailwindcss': {},
        // 把 import 的内容转换为 inline
        // @see https://github.com/postcss/postcss-import#postcss-import
        'postcss-import': {},

        // mixins，本插件需要放在 postcss-simple-vars 和 postcss-nested 插件前面
        // @see https://github.com/postcss/postcss-mixins#postcss-mixins-
        'postcss-mixins': {},

        // 这个插件可以在写 nested 样式时省略开头的 &
        // @see https://github.com/postcss/postcss-nested#postcss-nested-
        'postcss-nested': {},

        // 提供 @extend 语法
        // @see https://github.com/jonathantneal/postcss-extend-rule#postcss-extend-rule-
        'postcss-extend-rule': {},

        'autoprefixer': {},
    },
};

export default config;