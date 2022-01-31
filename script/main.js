import { url } from "./url.js";
const card = document.querySelector(".row");
const mostrarDato = async () =>{
    const res = await fetch(url);
    const dato = await res.json();

    dato.forEach(element => {
        const {id, name, image, Population, Region, capital} = element;
        card.innerHTML += `
        <div class="card" style="width: 18rem;">
                            <img src="${image}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h1>${name}</h1>
                                <h6 class="info">population: ${Population}</h6>
                                <h6 class="info">region: ${Region}</h6>
                                <h6 class="info">capital: ${capital}</h6>
                                <input class="btn btn-primary" type="submit" value="Submit">
                            </div>
                        </div>
        `
    });
}
document.addEventListener('DOMContentLoaded', mostrarDato);

//BUSCADOR

const res = await fetch(url);
const dato2= await res.json();

document.addEventListener('keyup', autocompletado)
function autocompletado () {
    card.innerHTML = ""
    let buscador = document.getElementById('buscador').value
    dato2.forEach(function(pais) {
        if (pais.name.toLowerCase().includes(buscador.toLowerCase()) ) {
         console.log(pais)
         const {id, name, image, Population, Region, capital} = pais;
         card.innerHTML += `
         <div class="card" style="width: 18rem;">
                             <img src="${image}" class="card-img-top" alt="">
                             <div class="card-body">
                                 <h1>${name}</h1>
                                 <h6 class="info">population: ${Population}</h6>
                                 <h6 class="info">region: ${Region}</h6>
                                 <h6 class="info">capital: ${capital}</h6>
                                 <input class="btn btn-primary" type="submit" value="Submit">
                             </div>
                         </div>
         `
        }
       
      
    });
}


autocompletado()
 

//MODO OSCURO

 
const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
  
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        document.card.classList.toggle('light-theme')

    } else {
        document.body.classList.toggle('dark-theme')
        document.card.classList.toggle('dark-theme')

    }

})
