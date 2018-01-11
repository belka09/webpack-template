const path = require('path');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //         {
            // //         test: /\.js$/,
            // //         exclude: /node_modules/,
            // //         use: ['style-loader',
            // //             "css-loader",
            // //             "postcss-loader"
            // //         ]
            // //     },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]

    }    //     {
    //         test: /\.scss$/,
    //         use: [
    //             {
    //                 loader: 'style-loader'
    //             },
    //             { loader: 'css-loader' },
    //             { loader: 'postcss-loader' },
    //             { loader: 'sass-loader' },
    //             {
    //                 loader: 'css-loader',
    //                 options: {
    //                     sourceMap: true
    //                 }
    //             }
    //         ]
    //     }
    //     ]
    // }
};
