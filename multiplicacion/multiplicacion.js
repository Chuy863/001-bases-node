const fs = require('fs'); //aqui se esta importando el paquete de manipulacion de archivos, 
 
//Funcion que recibe un parametro 2-3-4
let crearArchivo = (base, limite ) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if(!Number(base)){
            reject('Inserte un numero valido');
            return;
        }

        if(!Number(limite)){
            reject('Inserte un limite valido');
            return;
        }

        for(let i = 1; i<= limite; i++ ){
            tabla += `${base} x ${i} = ${base * i}\n`; //alt 92 diagonal invertida
            //console.log(base  +  'x'  +  i   +  '='  +  base  *  i ); //version clasica
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, tabla, (err) => {
            // este if pregunta por un si if(!err) este es para negar
                if(err) {
                    reject(err);
                 } else{
                resolve(`tabla-${base}.txt`);
                }
         });
    });
};

let listarTabla =(base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('Inserte un numero valido');
            return;
        }
        if(!Number(limite)){
            reject('Inserte un limite valido');
            return;
        }
        
        for(let i = 1; i<= limite; i++ ){
            console.log(`${base} x ${i} = ${base * i}`);
        }
    });
};  

module.exports = {
    crearArchivo,
    listarTabla
};