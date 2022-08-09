/*>> Consigna:
Realizar un proyecto de servidor basado en node.js que utilice 
el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con 
todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto 
elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y 
utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
*/

const express= require('express');
const app=express();
const port =3000;


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
const productoAll=p.getAll();
app.get('/productos',(req,res)=> {
    const arr=productoAll.map(function(obj){
        return obj;
    });
    
    return res.send(arr);

    
})
app.get('/random',(req,res)=>{
   
    const arr=productoAll.map(function(obj){
        return obj;
    });
    
    let rand= Math.trunc(Math.random() * 3);
  //  res.send('esto es'+rand);
    return res.send(arr[rand]);
})
app.get('/clima',(req,res)=> {
    res.send("hace frio ");
})
app.get('/saludo',(req,res)=> {
    res.send("<h2 style='color:red'> Saludo</h2> ");
})
app.get('',(req,res)=> {
    res.send("<h2 style='color:red'> Saludo</h2> ");
})
const count=0;
app.get('/visitas',(req,res)=> {
    if(req){
        count=count + 1;
        res.send(`<h2 style='color:red'> Visitas ${count} </h2>` );
    }
    
})
app.get('/session', (req, res) => {
  
    if (req.views) {
          
        req.views++;
      res.end()
    } else {
      req.views = 1;
      res.end(`${req.views} vistas `);
    }
  })
app.listen(port, () =>{
    console.log("esta corriendo en puerto"+ port)
})

app.on("error", error => console.log("el error es:"+error));