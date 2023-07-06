const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgToFontPlugin = require('svgtofont-webpack-plugin').default;
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        fabric: './src/fabric/fabric.ts',
        index: './src/index.js',
        requestFrame: './src/js/requestFrame.ts',
        timeoutAnimation: './src/js/timeoutAnimation.ts',
        sort: './src/js/sort.ts',
        worker: './src/js/worker.ts',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules|dist/,
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader',
                //exclude: /dist/,
            },
            // {
            //     test: /\.font\.js/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 url: false
            //             }
            //         },
            //         'webfonts-loader'
            //     ]
            // },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new MiniCssExtractPlugin(),
        new SvgToFontPlugin({
            src: __dirname + '/icons',
            dist: __dirname + '/fonts',
            fontName: 'myfont',
            website: false,
            outSVGReact: false,
            css: {
                include: '\\.(css)$',
                output: "./dist",
                cssPath: "../fonts/"
            },
            emptyDist: true,
        })
    ],
    // devtool: 'source-map',
};