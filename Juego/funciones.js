document.addEventListener('DOMContentLoaded', () => {

    const imagenes = [
        { img: './imagenes/caballo.png', name: 'caballo' },
        { img: './imagenes/leon.png', name: 'leon' },
        { img: './imagenes/mono.png', name: 'mono' },
        { img: './imagenes/caballo.png', name: 'caballo' },     
        { img: './imagenes/oso.png.crdownload', name: 'oso' },
        { img: './imagenes/perro.png', name: 'perro' },
        { img: './imagenes/leon.png', name: 'leon' },
        { img: './imagenes/oso.png.crdownload', name: 'oso' },
        { img: './imagenes/mono.png', name: 'mono' },
        { img: './imagenes/loro.png', name: 'loro' },
        { img: './imagenes/perro.png', name: 'perro' },
        { img: './imagenes/loro.png', name: 'loro' },
    ]

    //tablero html
    let tablero = document.querySelector('.tablero');

    let imgElegida = [];
    let imgElegidaId = [];
    let intentosCorrectos= [];
    const numeroIntentoGanado = document.querySelector('.resultado')
    
    

    //funcion para colocar las imagenes en el html a
    const crearTablero = () => {
        

        for(let k=0; k < imagenes.length; k++ ){
      const img = document.createElement('img')
            img.setAttribute('data-id', k);
            img.setAttribute('src', './imagenes/interbb.png');
            img.setAttribute('width', '150px');
            img.setAttribute('class','a');
            tablero.appendChild(img);
            img.addEventListener('click',descubrirImagen);

        }

    }
    //Método para desordenar
    imagenes.sort(()=> 0.5 - Math.random());



    //Crear funcion descubrir
    function descubrirImagen (){
        const imgId = this.getAttribute('data-id');
        imgElegida.push(imagenes[imgId].name);
        imgElegidaId.push(imgId);
        this.setAttribute('src', imagenes[imgId].img);
        
        if(imgElegida.length ===2 ){
            setTimeout(() => {
                igualdadImg();
            }, 500);
        }

     }

     //Funcion para la igualdad
     function igualdadImg () {
         let imagen = document.querySelectorAll('img');
         const opcion1Id = imgElegidaId[0];
         const opcion2Id = imgElegidaId[1];

         

         if(imgElegida[0] === imgElegida[1] && opcion1Id != opcion2Id ){
             alert('Correcto');
             imagen[opcion1Id].setAttribute('src', './imagenes/bien.png');
             imagen[opcion2Id].setAttribute('src', './imagenes/bien.png');
             imagen[opcion1Id].removeEventListener('click',descubrirImagen)
             imagen[opcion2Id].removeEventListener('click',descubrirImagen)
             intentosCorrectos.push(imgElegida);

         }else{
             menError1 ="Intentalode nuevo";
             menError2 ="Debes elejir diferentes cartas";


            alert('Intentalo de nuevo');
            imagen[opcion1Id].setAttribute('src', './imagenes/interbb.png');
            imagen[opcion2Id].setAttribute('src', './imagenes/interbb.png');
            
         }
         imgElegida = [];
         imgElegidaId = [];

         numeroIntentoGanado.textContent=intentosCorrectos.length;

         if(intentosCorrectos.length === imagenes.length/2){
                
               alert('Lo lograste !!!')
                location.reload()
                

         }

     }

   
    //Ejecutar 
    crearTablero();


    //crear div
     
     

   
})

 