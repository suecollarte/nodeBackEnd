class Usuario {
    constructor(nombre,apellido) {
        this.nombre= nombre;
        this.apellido=apellido;
       
    }

    get getFullName(){
        return this.FullName;
    }
    FullName(){
        return "Usuario"+this.nombre +" "+ this.apellido;
    }
    
}
class Libros {
    constructor(nombre,autor) {
        this.nombre= nombre;
        this.autor=autor;
       
    }
    get getBookNames(){
        return this.BookNames();
        //console.log(Libros[2]);
     }
 BookNames(){
    return "Libro "+this.nombre+" "+this.autor;
 }

}
class Mascotas {
    constructor(tipo) {
        this.tipo= tipo;
       
       
    }
    

}
const persona1= new Usuario ("Susana", "Collarte") ;
const libro_1 = new Libros ("xxxx","yyy");
    
const mascota1 = new Mascotas("perro");
const mascota2 = new Mascotas("gato");

function countMascotas(){
  
    console.log(Mascotas);
    console.log("Hay "+Mascotas.length+" mascotas");
    }
    
countMascotas();
const mascota3 = new Mascotas("gato");

console.log(persona1.getFullName);
console.log(libro_1.getBookNames);

/* addBook*/
const libro_2=new Libros ("señor de los anillos", "JRR Tolkien")

console.log(libro_2.getBookNames);