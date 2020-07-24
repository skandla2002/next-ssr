module.exports = {
    webpack: config => {
        config.module.rules.push({
            test: /\.(png|jpg)/,
            use: {
                loader: 'file-loader',
                options: {

                }
            }
        });
        return config;
    }
}