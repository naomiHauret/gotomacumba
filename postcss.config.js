module.exports = {
    plugins: [
        require("postcss-normalize"),
        require("postcss-fontpath")({
            checkFiles: true,
        }),
        require("postcss-preset-env")({
            stage: 0,
        }),
    ],
}