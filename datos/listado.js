require('colors');
const tareas = require('../models/tareas')
// listado de opciones
const listado_opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Agregar`
            },
            {
                value: '2',
                name: `${'2.'.green} Mostrar`
            },
            {
                value: '3',
                name: `${'3.'.green} Mostrar lista completada`
            },
            {
                value: '4',
                name: `${'4.'.green} Mostrar lista pendiente`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Eliminar`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];
// listado de lista del mensaje pause
const listado_pause = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'Enter'.yellow} para continuar..`
    }
];
// listado de lista de la entrada de la pregunta
const listado_question = [
    {
        type: 'input',
        name: 'desc',
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese el campo obligatorio..'
            }
            return true;
        }
    }
];


// En este apartado exportamos los listado
module.exports = { listado_opciones, listado_pause, listado_question }