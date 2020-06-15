const argv  = require('./config/yargs').argv;
const { crear, guardarDb } = require('./por-hacer/por-hacer'); 
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv.d);


let comando = argv._[0];


switch (comando){

    case 'crear':
        let tarea = crear(argv.d);
       console.log(tarea);
      
    break;

    case 'listar':

            let listado = porHacer.getListado();

                for(let tarea of listado){
                    
                    console.log('=======Tarea========'.green);
                    console.log('Descripcion:', tarea.descripcion);
                    console.log('Estado:', tarea.completado);
                    console.log('====================='.green);
                }
    break;
    
    case 'actualizar':
       let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
       console.log(actualizado);
    break;
    
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
    break;
}