module.exports = {
    "presets": ["@babel/preset-typescript"],
    plugins: [
        [
            'module-resolver',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                root: ['.']
            }
        ]
    ]
};