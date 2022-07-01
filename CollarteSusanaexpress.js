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
class Constructor {
    constructor (archivo){
         this.archivo=this.archivo
         this.productos=[]
         this.id=1
    }
 async getAll(){
        const data1=fs.readFileSync('./productos.txt','UTF-8');
        //this.productos=data1.map((data1) =>data1);
        return data1;
     }
Nombres1(e){
        obj1=getAll();
        let nombreproducto=this.producto.map((obj1) =>{return (obj1)});
    
        let Nombre=nombreproducto[e];
        return Nombre;
     }

async save(e){
     this.getAll();
     this.productos.push(e);
 try {
   
       await fs.writeFile("./productos.txt",JSON.stringify(this.productos));
    return 
    } catch (err){
        console.log(err);
    //return 0;
    }
    


}

}


/* 
deleteAll() {
    // console.log(productosGuardados)
    let array = productosGuardados.splice(0, productosGuardados.length);
    
    
    fs.promises.writeFile(
      "productos.txt",
      JSON.stringify(array),
      function (err) {
        if (err) throw err;
        console.log("Elemento eliminado!");
      }
    ); 
    */

const p=new Constructor();
p.save('Escuadra', 123.45, 'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png');
p.save('Calculadora', 234.56, 'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png');
p.save('Globo Terraqueo', 345.67, 'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png');
p.save('producto5', 99000, 'www.xxx.cl/foto5.jpg');
p.save("producto99", 56000, "www.ccc.cl/foto1.jpg")   ;
console.log(p);

//var task_names = p.map((task) => task.name );
//p.producto.forEach(element => console.log(element));
//const dataarch=fs.readFileSync('./docu.txt','utf-8');
//console.log(p.save(dataarch));
//p.save('./producto.txt',pro);
//console.log(p.getAll());
//const arr=p.leerTC('./productotxt');




let prod=p.getAll();

app.get('/productos',(req,res)=> {
    res.send(`<h1>Productos: </h1> ${prod}`);

    
})
app.get('/random',(req,res)=>{
    let rand= Math.floor(Math.random() * 5);
    let lista=p.getall();
    let prod1=lista(rand);
    res.send(`Random aleatorio: ${prod1}`);
})
app.get('/clima',(req,res)=> {
    res.send("hace frio ");
})
app.get('/saludo',(req,res)=> {
    res.send("<h2 style='color:red'> Saludo</h2> ");
})
let count=0;
app.get('/visitas',(req,res)=> {
    if(req){
        count ++;
        res.send(`<h2 style='color:red'> Visitas ${count} </h2>` );
    }
    
})
app.get('/session', (req, res) => {
  
    if (req.session.views) {
          
      // Increment the number of views.
      req.session.views++
  
      // Print the views.
      res.write('<p> No. of views: ' 
          + req.session.views + '</p>') 
      res.end()
    } else {
      req.session.views = 1
      res.end(' New session is started')
    }
  })
app.listen(port, () =>{
    console.log("esta corriendo en puerto"+ port)
})

app.on("error", error => console.log("el error es:"+error));