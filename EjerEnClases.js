
/* crear un proyecto que genere 10000 numeros aleatorios en el rango de 1 a 20
crear un objeto cuyas claves sean los numeros salidos y el valor asociado a 
cada clave sera la cantidad de veces que salio dicho numero */
class Numeros {
    constructor(numeroSalida) {
           this.numeroSalida=[];
       
    }

    get getRandom(){
        return this.Trae;
    }
    Trae(){
        this.numeroSalida.push(Math.random()*(19.9999));
        return this.numeroSalida.push(Math.random()*(19.9999));
    }
    
}


const p =new Numeros();

let valueAppearances = [];
for (let index = 0; index < 10000; index++) {
    valueAppearances.push(0);
  }

// Creo un array para llevar la cuenta de los valores
(function() { 
    console.log("hola");
})();

const muestra =(params)=>{console.log(params)};
const muestra2 =params=>{console.log(params)};
muestra("hola nnnn");
muestra2("hola nnnn");
/*
Definir la clase Contador.
1) Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
2)Cada instancia inicia su cuenta individual en cero.
3) La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por
 sus instancias, el cual también inicia en cero.
*/
/*
4) Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
5)    Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
6)    Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores 
creados hasta el momento.
7)    Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general
*/
class Contador {
    constructor(nombre,cuentaindividual) {
           this.nombre=nombre
           this.cuentaindividual=cuentaindividual
           this.cuentatodo=0
       
    }
    
    get obtenerResponsable(){
        return this.nombre;
    }
    obtenerCuentaGlobal(){
      
        return this.cuentatodo++;
    }
    get obtenerCuentaIndividual(){
        
        return this.cuentaindividual++;
    }
}

const Objeto= new Contador();
const cuenta1 = new Contador ('Maria dolores',0);
const cuenta2 = new Contador ('Maria Virginia',0);   
cuenta2.obtenerCuentaIndividual;
function foo(){
    console.log("Contador");
    console.log(Objeto.obtenerCuentaGlobal());
    cuenta1.obtenerCuentaIndividual;
    console.log(Objeto.obtenerCuentaGlobal());
    cuenta2.obtenerCuentaIndividual;
    console.log(cuenta1.cuentaindividual);
    console.log(cuenta2.cuentaindividual);
    console.log(`Global: ${Objeto.obtenerCuentaGlobal()}`);
    

}
foo();
foo();

const add=(function (){
    let counter=0;
    return function(){counter +=4;return counter}
})();
add();
add();
console.log("add");
console.log(add());

function crearGritarNom(nombre){
    const signosexclamacion='!!!';
    return function (){
        console.log(`${nombre}${signosexclamacion}`);
    }
}
const grita=crearGritarNom('susana');
grita() ; //
for (let i = 0; i <= 10000; i++) {
    // obtengo el aleatorio entre 2 y 19.999
    let randomIndex = p.getRandom();
    // incremento las apariciones de este valor
    valueAppearances[randomIndex]++;
  }

  console.log(valueAppearances);


  const productos =[
    {id:1,nombre:'Escuadra',precio:323.45},
    {id:2,nombre:'Calculadora',precio:234.56},
    {id:3,nombre:'Globo Terraqueo',precio:45.67},
    {id:4,nombre:'Paleta pintura',precio:456.78},
    {id:5,nombre:'reloj',precio:67.89},
    {id:6,nombre:'agenda',precio:78.90}

]
/* nombre*/
class total {
    constructor (preciototal, preciomenor, preciomayor){
this.preciototal=0.00;
this.preciomenor=0.00;
this.preciomayor=0.00;

    }
precioT(){
    
for (let i=0; i<6;i++){
    this.preciototal=this.preciototal + productos[i].precio;
    console.log(productos[i].nombre);
    
}
return this.preciototal

    }
}

const producto = new total();

console.log("Total: "+producto.precioT());
let promedio = 0.00;
promedio= producto.preciototal/6;
console.log("Promedio: "+promedio);