module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    reporters: [
        "default",
        ["jest-html-reporters", {
            publicPath: "./html-report",
            filename: "test-report.html",
            expand: true,
            openReport: true
        }],
    ],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],

    moduleNameMapper : {
        '^@src/(.*)': '<rootDir>/src/$1',
        '^@test/(.*)': '<rootDir>/test/$1'
    },
};
