class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=[]
        
    }
    
    
    getfullName(){
        return `Usuario es ${this.nombre}  ${this.apellido}`
    }
    
    countMascotas(){
        const xx=this.mascotas;
        const yy=xx.length;
        return yy;
    }
    addMascota(mascota){
       this.mascotas.push(mascota);
    }
    addBook(nombre,autor){
    const arra=this.libros;
               
    arra.push({nombre,autor});
    this.libros=arra;
        
    
    }
    
    getBookNames(){
        
    const l_Libro= this.libros;
    const nombreLibros=l_Libro.map(function(obj){
        return obj.nombre;
    });
    return nombreLibros ;
    
    }
    
}

    let usuario1= new Usuario('Nelson',' Mandela');
usuario1.addBook("señor de los anillos", "JRR Tolkien");
usuario1.addBook('xx2','yyy2');
usuario1.addMascota('perro');
usuario1.addMascota('gato');
console.log(usuario1);
console.log(usuario1.getfullName());

console.log('Libros:',usuario1.getBookNames());
console.log("Cantidad de mascotas:",usuario1.countMascotas());