const { v4: uuid4 } = require('uuid');
class Tarea {
    // creamos los atributos necesarios
    id = '';
    desc = '';
    completadoEn = null;
    // creamos un contructor con los atributos mencionados anteriormente
    constructor(desc = '') {
        this.id = uuid4();
        this.desc = desc;
        this.completadoEn = null;
    }
}
// En este apartado exporto la clase Tarea
module.exports = Tarea;