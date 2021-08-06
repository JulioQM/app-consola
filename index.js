const { guardarDB, leerDB } = require("./helper/guardarArchivo");
const { mostrarMenu, pause, input, listado_eliminar, confirmar, mostrarListadoCheckList } = require("./helper/inquirer");
const Tareas = require('./models/tareas')

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareas(tareasDB);
    }

    do {
        //console.clear(); // limpia el espacio de trabajo
        opt = await mostrarMenu();// esta opcion imprime el menu        
        switch (opt) {
            case '1':
                const entrada = await input('Descripción: ');
                tareas.crearTarea(entrada);
                console.log(entrada);
                break;
            case '2':
                /* console.log(tareas._listado); */
                //console.log(tareas.listadoArray)                
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listadoPendientesCompletadas(true);
                break;
            case '4':
                tareas.listadoPendientesCompletadas(false);
                break;
            case '5':
               const ids=await mostrarListadoCheckList(tareas.listadoArray);
               tareas.toggleCompletadas(ids);
               console.log({ids});
                break;
            case '6':
                const id = await listado_eliminar(tareas.listadoArray);
                if (id != '0') {

                    const ok = await confirmar('¿Esta seguro que desea eliminar?');
                    if (ok) {
                        tareas.eliminarTarea(id);
                        // console.log({ id });
                        console.log('Tarea borrada correctamente');
                    }
                }
                break;
        }
        guardarDB(tareas.listadoArray);
        await pause();
    } while (opt !== 0)
}
main();