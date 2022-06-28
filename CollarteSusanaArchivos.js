/*
clase Contenedor nombre de archivo 
save
getById
getAll
deleteByid
deleteAll
*/

const fs= require('fs');
/* try {
const data=fs.readFileSync('./docu.txt','utf-8');
fs.writeFileSync('./docu.txt','ESTO ES UNA PRUEBA');
const fecha = new Date();
fs.appendFileSync('./docu.txt','hola'+fecha);

console.log(data);
} catch (err){
    console.log(err);

}
try {
    const data1=fs.readFileSync('./package.json','utf-8');
   // fs.writeFileSync('./docu.txt','ESTO ES UNA PRUEBA');
  //  const fecha = new Date();
 //   fs.appendFileSync('./docu.txt','hola'+fecha);
    
    console.log(data1);
    try{
        
        fs.writeFileSync('./nfo.txt',data1);
    }
    catch (err){
        console.log(err);
    
    }
    
    } catch (err){
        console.log(err);
    
    }
 
    async function escribir(){
        try{
            await fs.promises.writeFile('./info1.txt','esto es una prueba');

        }
        catch (err){
            //error
        }
    }
    escribir(); */

class Producto {
        constructor (title,preci,thumbail){
             this.title=title;
             this.preci=preci;
             this.thumbail=thumbail
    
    
        }
    }

 const pro=new Producto('title1',56.04,'thumbail1')    ;

    // await y async
class Contenedor {
    constructor (nombrearchivo,id){
         this.nombrearchivo=[];
         this.id=0


    }
   
 async save(e,archivo){
     try {
        console.log(e);
        await fs.promises.writeFile(archivo,JSON.stringify(e));
        this.nombrearchivo.push(archivo) ;
        this.id =this.id +1; 
        console.log(this.id, this.nombrearchivo,JSON.stringify(e));
        return this.id;
        } catch (err){
            console.log(err);
        //return 0;
        }
    


    }

getById(e){
    const data1=fs.readFileSync(this.nombrearchivo[e],'UTF-6');
 return data1
    
    
    
}
async getAll(){
    let i=0;
    try{
        for(i=0;i< this.id;i++){
          const contenido=this.nombrearchivo[i];
         return contenido;
        }
    }
    catch (err) {
                console.log("error");
    }
    
        

    }
    
    


deleteById(e)
{
    
        
        fs.unlink(this.nombrearchivo[e],function(err){
            if (err) throw err;
            console.log('archivo eliminado');
        });
              
        
    
}



deleteAll()
{
    
    let i=0;
    for(i=0;i< this.id;i++){
        fs.unlink(this.nombrearchivo[i],function(err){
            if (err) throw err;
            console.log('archivo eliminado');
            return 
        });

    }
    
}
}

const p=new Contenedor();

p.save('./producto.txt','producton,666,foton');
console.log(p.getAll());