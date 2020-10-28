const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
          alias: 'l', 
          default: 10 
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
      base: {
          demand: true,
          alias: 'b'
      },
      limite: {
        alias: 'l', 
        default: 10 
      }
  })
    .help()
    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let commando = argv._[0];

let base = argv.base; 
let limite = argv.limite; 


switch(commando){
  case 'listar':
    multiplicar
      .listarTabla(base, limite)
      .then()
      .catch(err => console.log(`Ocurrio un error ${error}`));
  break;
case'crear':
    multiplicar
      .crearArchivo(base, limite)
      .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
      .catch(err => console.log(`Ocurrio un error ${error}`));

     break
  default:
    console.log('Comando no reconocido');
}

//console.log('La base insertada fue: ', argv.base);
//console.log('El limite insertado fue: ', argv.limite);
//console.log('La opcion del menu seleccionado fue: ', argv._[0]);

multiplicar
   .crearArchivo()
   .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
   .catch(err => console.log(`Ocurrio un error ${error}`));



 //alt 96 para comilla alreves
 //alt 92 diagonal invertida
  
/*
2x1=2
2x2=4
2x3=6
2x4=8
2x5=10
2x6=12
2x7=14
2x8=16
2x9=18
2x10=20
*/

//para ejecutar dos formas
//nodemon y nombre archivo: queda para que se ejecutre solo con gusrdar cambios
// node y nombre del archivo: hay que ejecutarse cada vez que se guarda