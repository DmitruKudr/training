const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgToFontPlugin = require('svgtofont-webpack-plugin').default;
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        fabric: './src/fabric/fabric.ts',
        styles: './src/styles.js',
        app: './src/react/App.tsx',
        index: './src/react/index.tsx',
        requestFrame: './src/js/requestFrame.ts',
        timeoutAnimation: './src/js/timeoutAnimation.ts',
        //sort: './src/js/sort.ts',
        //worker: './src/js/worker.ts',
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
            // {
            //     test: /\.(ts|js)x?$/,
            //     exclude: /node_modules|dist/,
            //     use: {
            //         loader: 'babel-loader',
            //     }
            // },  
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules|dist/,
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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