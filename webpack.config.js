// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

// Access the fields to configure webpack
const pkgVars = require('./package.json');

// Destructure variables from pkgVars.config
const {entry, sourceDir, buildDir, port} = pkgVars.config;

const config = {
    entry: `./${sourceDir}/assets/scripts/${entry}.js`,
    output: {
        path: path.resolve(__dirname, buildDir),
    },
    devServer: {
        static: './dist',
        watchFiles: [`./${sourceDir}/index.ejs`],
        open: true,
        hot: true,
        port:3000,
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `./${sourceDir}/index.ejs`,
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin()); 
    } else {
        config.mode = 'development';
    }
    return config;
};
