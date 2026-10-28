module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: ['src/steps/**/*.ts', 'src/hooks/**/*.ts'],
        requireModule: ['tsx/cjs'],
        format: ['progress'],
        formatOptions: { snippetInterface: 'async-await' },
        publishQuiet: true
    }
};