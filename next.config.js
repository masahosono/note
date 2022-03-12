const dotenv = require('dotenv')
const env = dotenv.config().parsed
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, {}]], {
    webpack: function (config, { webpack }) {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: {
                loader: 'ts-loader',
            },
        })
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(env),
            })
        )
        return config;
    },
    images: {
        disableStaticImages: true
    }
});
