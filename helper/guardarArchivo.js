const fs = require('fs');// exporta paquete que sirve para guardar archivos de texto
const path = './db/data.json';// es la ruta del archivo, formato json , se declaro de forma global

//metodo guardar la data que recibe como parametro la informacion del areglo de tareas
const guardarDB = (data) => {
    //const path = './db/data.txt';// es la ruta del archivo, formato .txt
    fs.writeFileSync(path, JSON.stringify(data));

}
// metodo para leer el archivo
const leerDB = () => {
    if (!fs.existsSync(path)) {
        return null;
    }
    const info = fs.readFileSync(path, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    //console.log(data);
    return data;
}

module.exports = { guardarDB, leerDB };