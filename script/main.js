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
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

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

autocompletado
















// const buscar = async () =>{
//     const res = await fetch(url);
//     const dato2= await res.json();

//     console.log(formulario.value)
//     const buscado = formulario.value.toLowerCase();
//     for(let pais of dato2){
//         console.log(dato2)
//         console.log(pais)
//         // let palabra = pais.name.toLowerCase()
//         // if(palabra.indexOf(buscado) !== -1){
//         //     const {id, name, image, Population, Region, capital} = palabra;
//         //     card.innerHTML += `
//         //     <div class="card" style="width: 18rem;">
//         //                         <img src="${image}" class="card-img-top" alt="">
//         //                         <div class="card-body">
//         //                             <h1>${name}</h1>
//         //                             <h6 class="info">population: ${Population}</h6>
//         //                             <h6 class="info">region: ${Region}</h6>
//         //                             <h6 class="info">capital: ${capital}</h6>
//         //                             <input class="btn btn-primary" type="submit" value="Submit">
//         //                         </div>
//         //                     </div>
//         //     `
//         //        }
//     }

// }
// boton.addEventListener('click', buscar);