
class Usuario {
    constructor(nombre,apellido) {
        this.nombre= nombre;
        this.apellido=apellido;
        
    }
}
const Libros =[
    {"nombre":"xxxx","autor":"yyy"},
    {"nombre":"wwww","autor":"tttt"}
];

const Mascotas =[
    {"nombre":"Pedri","raza":"mestizo"},
    {"nombre":"Blanqui","raza":"golden"}
];
const persona1= new Usuario ("Susana", "Collarte") ;

function getFullName(){
    console.log(persona1)  
}
getFullName();
function addMascota(x,y){

Mascotas.push({"nombre":x,"raza":y});
    
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
   console.log(Libros);
}
getBookNames(); 