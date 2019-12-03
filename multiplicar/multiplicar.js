const fs = require('fs');

//module.exports.crearArchivo = ...

let listarTabla = async(base, limite) => {

    if (!Number(base)) return Promise.reject(`El parametro introducido '${base}' no es un numero, es un ${typeof base}`);
    let content = '';
    for (let x = 1; x < limite; x++) content += `${base} * ${x} = ${base * x}\n`;
    console.log(`${content}`.brightMagenta);
}

let crearArchivo = async(base, limite) => {
    if (!Number(base)) return Promise.reject(`El parametro introducido '${base}' no es un numero, es un ${typeof base}`);
    let content = '';
    for (let x = 1; x <= limite; x++) content += `${base} * ${x} = ${base * x}\n`;
    fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, content, (err) => {
        if (err) throw err;
    });
    return `tabla-${base}-limite-${limite}.txt`;
}

module.exports = {
    crearArchivo,
    listarTabla
}