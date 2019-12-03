const colors = require('colors');
const colorSafe = require('colors/safe');
const argv = require('./config/yargs.js').argv;

const {
    crearArchivo
} = require('./multiplicar/multiplicar.js');

const {
    listarTabla
} = require('./multiplicar/multiplicar.js');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log(`Tabla listada`.rainbow))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.bgGray))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando irreconocible', comando);
}
console.log('YARGS ', argv);