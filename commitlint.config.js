/*
 * @Author: g05047
 * @Date: 2023-04-14 10:05:06
 * @LastEditors: g05047
 * @LastEditTime: 2023-04-14 14:21:43
 * @Description: file content
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 'type-case': [2, 'always', ['lower-case', 'upper-case']],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
            ],
        ],
    },
};
