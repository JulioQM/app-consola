const Tarea = require("./tarea");
require('colors');

class Tareas {
    // creo un objeto privado
    _listado = {};

    // accesores get
    get listadoArray() {
        const listado = [];
        // La propiedad Object.keys sirve para obtener todos los key o claves que tiene el objeto.
        // transformamos los objetos en un areglo
        Object.keys(this._listado).map((e) => {
            const tarea = this._listado[e];
            listado.push(tarea);
        }).toString();
        return listado;
    }


    // creo un constructor de objeto vacio
    constructor() {
        this._listado = {};
    }

    // metodo que tiene como parametro la descripcion de tipo string
    // ademas en este apartado vamos a llamar la clase, donde contiene todos los parametros
    // En esta lista de objetos voy a cuardar el id, y ademas los atributos de la clase tarea
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    // metodo para cargar la informacion
    cargarTareas(tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] =tarea;
            //console.log(tarea);
        });
    }

    listadoCompleto() {
        let i = 0;
        console.log();
        this.listadoArray.forEach(({ desc, completadoEn }) => {
            // primera forma
            const estado = (completadoEn)
                ? "completado".green
                : "pendiente".red;
            // segunda forma
            let s = ';'
            if (completadoEn != null) s = 'Completado'.green;
            else s = 'Pendiente'.red;
            // llamo a mi lista
            console.log(`${++i}`.green, ` :: ${desc} ${s}`);


        });
        console.log();

    }

    listadoPendientesCompletadas(completadoE = true) {
        console.log('');
        this.listadoArray.forEach(({ desc, completadoEn }, i) => {
            const estado = (completadoEn) ? "Completadas".green : "Pendientes".red;
            if (completadoEn != null && completadoE === true) {
                console.log(`${++i}`.green, ` ${desc} :: ${completadoEn.green}`);

            } else if (completadoEn === null && completadoE === false) {
                console.log(`${++i}`.green, ` ${desc} :: ${estado}`);
            }
        });
        console.log('');
    }
    // metodo de eliminar
    eliminarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    // cambiar con check de completado a pendiente
    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArray.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                // cualquiera de las dos fucniona
                //this._listado[tarea.id].completadoEn = null;
                const t = this._listado[tarea.id];
                t.completadoEn = null;
            }

        });

    }
}
// exporto la clase Tareas
module.exports = Tareas;