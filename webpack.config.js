var config = {
    entry: './main.js',

    output: {
        path:'./',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        host: '54.169.245.82',
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;