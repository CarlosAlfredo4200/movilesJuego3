console.log('Holass');

document.getElementsByTagName('h1')[0].style.color= 'red';
document.getElementsByTagName('h1')[0].style.backgroundColor= 'green';
document.getElementsByTagName('h1')[0].style.padding= '15px';


document.querySelector('h2').style.backgroundColor= 'blue';
document.querySelector('h2').style.padding= '20px';

const mensaje = document.querySelector('h3').addEventListener('mouseover', () =>{
    cambiarColor()
    
    
})

 


const cambiarColor = () =>{
   document.querySelector('h3').style.backgroundColor= 'red';
    document.querySelector('h3').style.color= 'white';
  
}

 
 
document.body.onload = addElement;

function addElement () {
  // crea un nuevo div y añade contenido
  const newDiv = document.createElement("div");
  const newContenido = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContenido); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


document.querySelector('h3').addEventListener('click', ()=>{
const crearP = document.createElement("p");
crearP.innerText = "Creando una p con innerText";
document.body.appendChild(crearP);

})
 



