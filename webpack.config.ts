import * as path from "path";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ProvidePlugin} from "webpack";
const HtmlWebpackPlugin = require('html-webpack-plugin');

const
    resolve = (...dir: string[]) => path.resolve(__dirname, ...dir),
    frontend = (...dir: string[]) => resolve('src', ...dir),
    distPath = resolve('dist');

export default {
    entry: frontend('app.tsx'),
    output: {
        path: distPath,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ProvidePlugin({
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            templateContent: `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>GitHub Mirrors</title>
                    </head>
                    <body class="aui-page-sidebar bitbucket-theme aui-sidebar-collapsed">
                    <div id="app"></div>
                    </body>
                </html>
            `
        })
    ],
    resolve: {
        extensions: ['.tsx', '.js'],
        alias: {
            '@github-mirrors': frontend(),
            'wrm/format': frontend('bitbucket', 'wrm-format.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: {url: false}},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(woff|ttf|eot|svg|png|jpg|gif)$/,
                use: [
                    {loader: 'file-loader', options: {name: '[name].[ext]'}}
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: '@atlassian/i18n-properties-loader',
                        options: {
                            i18nFiles: [
                                frontend('i18n', 'texts.properties'),
                                frontend('i18n', 'bitbucket.properties')
                            ]
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: distPath
    },
    stats: 'errors-warnings'
};