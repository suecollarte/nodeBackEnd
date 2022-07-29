/*
clase Contenedor nombre de Contenedor 
save
getById
getAll
deleteByid
deleteAll
*/

const fs= require('fs');
class Contenedor {

    constructor (archivo){
          this.archivo=archivo
          
    }

    static array=[]

    getById(j)
    {
        
        let todo= this.getAll();
        
        const arr=todo.map(function(obj){
            return obj;
        });
        Contenedor.array=arr;
       
        for(let i=0;i< Contenedor.array.length;i++)
        {
            if(i==j-1){
               i=Contenedor.array.length;
               return Contenedor.array[j-1];
               
            }
        }
        
       
        
        
    }

    getAll(){
    
        try{
    
            const contenido= fs.readFileSync(this.archivo,'utf-8'); //sincrono solo se ejecuta este primero
            const datos=JSON.parse(contenido); //parse lo pone este string como array
            return datos;
        }
    
        catch (error){
            console.log('error getAll');
    
        }
    
        
    }
    
   
    
    save(e){
    const obj=this.getAll();
    const obj1=obj.map(function(obj2){
    return obj2;
    });

    Contenedor.array=obj1;
    Contenedor.array.push(e);
   
    const paso=JSON.stringify(Contenedor.array,null,2);

        try {
    
        fs.writeFileSync(this.archivo,paso);
       console.log('Largo actual:'+Contenedor.array.length);
        } 
        catch (err){
    
        console.log('error no escribe',err);
    
        }
    
    }
    
    

    deleteAll(){
    
        Contenedor.array=[];
        try {
        fs.writeFileSync(this.archivo,JSON.stringify(Contenedor.array,null,2));
        }   
        catch (err){
    
            console.log('error',err);
        
            }
    
}



    deletebyId(j){
    
    let todo= this.getAll();
    
    
    const arr=todo.map(function(obj){
        return obj;
    });
    Contenedor.array=arr;
    let arr2=[];
    for(let i=0;i< Contenedor.array.length;i++)
    {
        if(i==j){
           
            console.log('se borra el elemento',i); i=i+1;
        }else{
        let obj1=arr[i];
        arr2.push(obj1);
       }
    }
    Contenedor.array=arr2;
    console.log('Largo Nuevo array',Contenedor.array.length);
    try {
    
        fs.writeFileSync(this.archivo,JSON.stringify(arr2,null,2));
    
        } 
        catch (err){
    
        console.log('error',err);
    
        }

    
    
}
}

const p=new Contenedor();

p.archivo = './productos.txt';

const p1={

nombre:'Escuadra', precio:'123.45', thumbail:'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'};
//p.save(p1);

const p2 ={nombre:'Calculadora', precio:234.56, thumbail:'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'};
//p.save(p2);

const p3={nombre:'Globo Terraqueo', precio: 345.67, thumbail: 'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'}
//p.save(p3);

//console.log('borrar');


//p.deletebyId(1);

//console.log(p.getAll());
//p.deleteAll();
//console.log(p.getAll());
console.log(p.getById(1));