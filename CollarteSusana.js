class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=[]
        this.mascotas=[]
        this.cant=0
    }
    
    
    getfullName(){
        return this.nombre+this.apellido
    }
    
    countMascotas(){
        return this.cant;
    }
    addMascota(mascota){
        
        this.mascotas.push(mascota);
        this.cant =this.cant+1;
    
    }
    addBook(nombre,autor){
        
           
        this.libros.push({nombre,autor});
    
    }
    
    getBookNames(){
        return this.BookNames();
    }
    BookNames(){
       let l_Libro= this.libros;
        let nombreLibros=l_Libro.map(function(obj){
            //let robj ={};
            //robj[obj.nombre]=obj.autor;
        //return robj;
        return obj.nombre;
    });
    return nombreLibros ;
    //return this.libros;
    }
    
    }