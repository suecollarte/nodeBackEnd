class Usuario {
    constructor(nombre,apellido) {
        this.nombre= nombre;
        this.apellido=apellido;
        this.Libros =[];
        this.Mascotas=[];
       
    }

    get getFullName(){
        return this.FullName;
    }
    FullName(){
        console.log( "Usuario Nombre Completo: "+this.nombre +" "+ this.apellido);
    }
    
    countMascotas(){
  
        console.log(this.Mascotas);
        console.log("Hay "+this.Mascotas.length+" mascotas");
        }
    addMascotas(tipoMascota){
        this.Mascotas.push(tipoMascota);
        
    }
        get getBookNames(){
            return this.BookNames();
            //console.log(Libros[2]);
         }
     BookNames(){
        let nombreLibros=this.Libros.map(libroItem =>{return libroItem});
        console.log(nombreLibros);
     }
     addBook(nombre,autor){
        this.Libros.push({nombre,autor});
        console.log(this.Libros);
     }
}

const persona1= new Usuario ("Susana", "Collarte") ;
    
persona1.addMascotas("perro");
persona1.addMascotas("gato");
persona1.addMascotas("gato"); 
persona1.countMascotas();

persona1.FullName();
persona1.BookNames();

/* addBook*/
persona1.addBook("señor de los anillos", "JRR Tolkien")
persona1.BookNames();
