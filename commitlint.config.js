var chalk = require('chalk');

const checkType = (header) => {
    header = `${header}`;
    const enumType = [
        'feat',
        'fix',
        'style',
        'chore',
        'test',
        'ci',
        'refactor',
        'revert',
        'reformat',
        'docs',
    ];
    const realType = header.split(':')[0];
    return enumType.includes(realType);
};

const checkSubject = (header) => {
    header = `${header}`;
    const realSubject = header.split(':')[1];
    if (!realSubject) {
        return false;
    }
    return realSubject.length > 0;
};

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 'body-leading-blank': [2, 'always'], // body换行
        // 'header-max-length': [2, 'never', 72], // header 最长72
        'type-enum-rule': [2, 'never'],
        'subject-enum-rule': [2, 'never'],
        'type-enum': [0, 'never'],
        'type-empty': [0, 'always'],
        'subject-empty': [0, 'always'],
    },
    plugins: [
        {
            rules: {
                'type-enum-rule': ({ header }) => {
                    console.error(
                        '  '
                            .concat(chalk.bgRed.white(' ERROR '), ' ')
                            .concat(
                                chalk.red(
                                    '\u63D0\u4EA4\u65E5\u5FD7\u4E0D\u7B26\u5408\u89C4\u8303'
                                ),
                                '\n\n'
                            )
                            .concat(
                                chalk.red(
                                    '  \u5408\u6CD5\u7684\u63D0\u4EA4\u65E5\u5FD7\u683C\u5F0F\u5982\u4E0B(emoji \u548C \u6A21\u5757\u53EF\u9009\u586B)\uFF1A\n\n'
                                ),
                                '    \n        '
                            )
                            .concat(
                                chalk.green(
                                    '[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83D\uDCA5 feat(\u6A21\u5757): \u6DFB\u52A0\u4E86\u4E2A\u5F88\u68D2\u7684\u529F\u80FD'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83D\uDC1B fix(\u6A21\u5757): \u4FEE\u590D\u4E86\u4E00\u4E9B bug'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83D\uDCDD docs(\u6A21\u5757): \u66F4\u65B0\u4E86\u4E00\u4E0B\u6587\u6863'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83C\uDF37 UI(\u6A21\u5757): \u4FEE\u6539\u4E86\u4E00\u4E0B\u6837\u5F0F'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83C\uDFF0 chore(\u6A21\u5757): \u5BF9\u811A\u624B\u67B6\u505A\u4E86\u4E9B\u66F4\u6539'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\uD83C\uDF10 locale(\u6A21\u5757): \u4E3A\u56FD\u9645\u5316\u505A\u4E86\u5FAE\u5C0F\u7684\u8D21\u732E\n'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.green(
                                    '\u5176\u4ED6\u63D0\u4EA4\u7C7B\u578B: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n'
                                ),
                                '\n        '
                            )
                            .concat(
                                chalk.red(
                                    'See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n'
                                )
                            )
                    );
                    // return [
                    //     checkType(header),

                    //     // '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, ' +
                    //     //     '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
                    // ];
                },
                'subject-enum-rule': ({ header }) => {
                    return [
                        checkSubject(header),
                        '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能',
                    ];
                },
            },
        },
    ],
};
