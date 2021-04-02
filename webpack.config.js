const path = require('path');

module.exports = {
    entry: './src/server.ts',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "http2": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "assert": false,
            "util": false,
            "url": false,
            "querystring": false,
            "react-native-sqlite-storage": false,
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
