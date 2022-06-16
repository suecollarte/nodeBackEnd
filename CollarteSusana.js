
class Usuario {
    constructor(nombre,apellido,mascotas,libros) {
        this.nombre= nombre;
        this.apellido=apellido;
        this.mascotas=mascotas;
        this.libros=libros;
        
    }
}
const Libros =[
    {"nombre":"xxxx","autor":"yyy"},
    {"nombre":"wwww","autor":"tttt"}
];

const Mascotas = [{"tipo":"perro"},{"tipo":"gato"}] ;
const persona1= new Usuario ("Susana", "Collarte") ;

function getFullName(){
    console.log(persona1.nombre+persona1.apellido)  
}
getFullName();
function addMascota(x){

Mascotas.push({"tipo":"gato"});
    
}
addMascota("Kiko","pastor");

function countMascotas(){
    
console.log(Mascotas);
console.log("Hay "+Mascotas.length+" mascotas");
}
countMascotas();  

function addBook(x,y){ 
Libros.push({"nombre":x,"raza":y});

} 
addBook("señor de los anillos", "JRR Tolkien");
function getBookNames(){
   console.log(Libros[2]);
}
getBookNames(); 