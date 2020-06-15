

const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);

   

        
            fs.writeFile('./db/data.json',data, (error) => {
                            if(error) throw new Error ('No se pudo registrar la tarea', error);
    })

}


const cargarDb = () => {

    try {
        listadoPorHacer = require('./../db/data.json');
        
    } catch {
        listadoPorHacer = [];
    }
    

}

const crear = (descripcion) => {

    cargarDb()

     let porHacer ={
         descripcion,
         completado:false
     };
     
     listadoPorHacer.push(porHacer);

     guardarDb();
     
     return porHacer;
     
}


const getListado = () => {

    cargarDb();

    if(listadoPorHacer.length < 1){
        return console.log('No hay tareas');
    }else{
        return listadoPorHacer;

    }

}

const actualizar = (descripcion,completado = true) => {

        cargarDb();

        let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

        if(index >= 0) {
            listadoPorHacer[index].completado = completado;
            guardarDb();
            return true;
        }else{
            return false;
        }

}

const borrar = (descripcion) => {

    cargarDb();
    
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    
    if(nuevoListado.length === listadoPorHacer.length ) {
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }
    
    
    
    
    //con el index y splice
    //let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    //if(index >= 0){
      //  listadoPorHacer.splice(index,1);
        //guardarDb();
        //return true;
    //}else{
        //return false;
    
    //}


}
module.exports = { 
    crear,
    guardarDb,
    getListado,
    actualizar,
    borrar
}