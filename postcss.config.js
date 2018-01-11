module.exports = {
    plugins: {
        'precss': {},
        'postcss-cssnext': {},
        'doiuse': {
            browsers: ['ie >= 11', '> 1%'],
            ignore: [
                'flexbox',
                'border-radius'
            ]
        },
        "rucksack-css": {},
        "cssnano":{}
    }
};