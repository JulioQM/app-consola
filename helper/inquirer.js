const inquirer = require("inquirer");
const { listado_opciones, listado_pause, listado_question } = require("../datos/listado");

// metodo de mostrar menu, con el uso del paquete inquerir
const mostrarMenu = async () => {
    console.log('===================='.yellow);
    console.log('Seleccione la opción');
    console.log('===================='.yellow);
    const { opcion } = await inquirer.prompt(listado_opciones);
    return opcion;
}
// metodo para agregarle un enter
const pause = async () => {
    const { enter } = await inquirer.prompt(listado_pause);
    return enter;
}
// metodo para ingresas los datos por teclado
const input = async () => {
    const { desc } = await inquirer.prompt(listado_question);
    return desc;

}

const listado_eliminar = async (tareas = []) => {
    // la funcion map me permite retorna los valores de adentro
    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${++i}. ${tarea.desc}`
        }

    });
    // si quiero agregar un valor por defecto al inicio  unshift y al final se usa push
    choices.push({
        value: '0',
        name: '0. Salir'
    });
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }];

    const { id } = await inquirer.prompt(preguntas);
    return id;
    //console.log(choices);
}

const confirmar = async (message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCheckList = async (tareas = []) => {
    // la funcion map me permite retorna los valores de adentro
    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${++i}. ${tarea.desc}`,
            checked: (tarea.completadoEn)? true :false  //uso de funciones ternarios (? :)
        }

    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccionar',
            choices
        }];

    const { ids } = await inquirer.prompt(pregunta);
    return ids;

}

// en este apartado vamos a exportar las funciones
module.exports = {
    mostrarMenu,
    pause,
    input,
    listado_eliminar,
    confirmar,
    mostrarListadoCheckList
};


