const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Editor',
            templateContent: ({htmlWebpackPlugin}) => `
            <html>
              <head>
                ${htmlWebpackPlugin.tags.headTags}
              </head>
              <body>
                <div id="app"></div>
                <div id="output"></div>
              </body>
            </html>
          `
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}