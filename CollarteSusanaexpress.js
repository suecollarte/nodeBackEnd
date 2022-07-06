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

class Construye {

constructor (archivo){
      this.archivo=archivo
}

getAll(){

    try{

        const contenido= fs.readFileSync(this.archivo,'utf-8'); //sincrono solo se ejecuta este primero
        const datos=JSON.parse(contenido); //parse lo pone este string como array
        
        return datos;
    }

    catch (error){
        console.log('error');

    }

    
}


save(e){
    let obj= this.getAll();
    let arr = Object.keys(obj).map(function (key) {return obj[key];});
    arr.push(e);

    try {

    fs.writeFileSync(this.archivo,JSON.stringify(arr,null,2));

    } 
    catch (err){

    console.log('error',err);

    }

}

}


//ejecucion
const p=new Construye();
p.archivo = './productos.txt';

const p1={

nombre:'Escuadra', precio:'123.45', thumbail:'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'};
//p.save(p1);

const p2 ={nombre:'Calculadora', precio:234.56, thumbail:'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'};
//p.save(p2);

const p3={nombre:'Globo Terraqueo', precio: 345.67, thumbail: 'https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png'}
//p.save(p3);


const productoAll=p.getAll();
app.get('/productos',(req,res)=> {
   
    let arr = Object.keys(productoAll).map(function (key) {return productoAll[key];});
    //console.log(Object.values(productoAll));
   
    return res.send(arr);

    
})
app.get('/random',(req,res)=>{
    let arr = Object.keys(productoAll).map(function (key) {return productoAll[key];});
    //console.log(Object.values(productoAll));
    let rand= Math.floor(Math.random() * 3);
    res.send(arr[rand]);
    
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