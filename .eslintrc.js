module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "no-console": "off",
        "no-underscore-dangle": ["error", {
            "allowAfterThis": true
        }]
    },
    "ignorePatterns": ["webpack.config.js", "node_modules/", "dist/"]
};