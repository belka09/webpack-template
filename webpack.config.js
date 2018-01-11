const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            use: 'jshint-loader'
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./assets/sass']
                    }
                }
            ],
        }
        ]
    }
};
