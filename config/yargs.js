const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla', opts)
    .command('crear', 'Crea el archivo tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}