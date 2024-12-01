const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const assetsDir = './assets';

const defaultWordpressConfig = {
    ...defaultConfig,
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig.resolve.alias,
            Assets: path.resolve(__dirname, assetsDir),
        }
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]',
                },
            },
        ],
    },
};

// const customAdminConfig = {
//     mode: 'development',
//     entry: {
//         admin: [
//             path.resolve(__dirname, 'src/_Backend/index.js'),
//             path.resolve(__dirname, 'src/_Backend/components/scss/main.scss'),
//             path.resolve(__dirname, 'src/_Backend/assets/scss/shared-editor.scss'),
//         ],
//         autoRecoverBlocks: [
//             path.resolve(__dirname, 'src/_Backend/autoRecoverBlocks.js'),
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, 'build-admin'),
//         filename: 'pr-gutenberg-[name].[contenthash].js',
//         assetModuleFilename: 'images/[name][ext]',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                     },
//                 },
//             },
//             {
//                 test: /\.(png|jpg|jpeg|gif|svg)$/i,
//                 type: 'asset/resource',
//                 generator: {
//                     filename: 'images/[name][ext]',
//                 },
//             },
//         ],
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: 'pr-gutenberg-[name].[contenthash].css',
//         }),
//         new CleanWebpackPlugin(),
//     ],
//     resolve: {
//         alias: {
//             Assets: path.resolve(__dirname, assetsDir),
//         },
//     },
// };

module.exports = [defaultWordpressConfig];