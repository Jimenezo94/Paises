import { url } from "./url.js";
<<<<<<< HEAD
import getDatos from "./getDatos.js";
import { showData } from "./eventos.js";

const card = document.querySelector("#ro");
let selec = document.querySelector(".form-select");

document.addEventListener('DOMContentLoaded', () =>{
    const data = getDatos(url);
    showData(data, card);
});

=======
const card = document.querySelector("#ro");
const card1 = document.querySelector("#ra");
let selec = document.querySelector(".form-select");

const mostarDato = async () => {
    const res = await fetch(url);
    const dato = await res.json();
    card.innerHTML = "";
    dato.forEach(element => {
        const { id, name, image, Population, Region, capital } = element;
        card.innerHTML += `
        <div class="card" style="width: 18rem;">
         <img src="${image}" class="card-img-top" alt="">
         <div class="card-body">
        <h1>${name}</h1>
        <h6 class="info">population: ${Population}</h6>
        <h6 class="info">region: ${Region}</h6>
        <h6 class="info">capital: ${capital}</h6>
        <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
        </div>
        </div>
        `
    })
};
document.addEventListener('DOMContentLoaded', mostarDato);


const res = await fetch(url);
const dato2 = await res.json();
document.addEventListener('keyup', autocompletado)
function autocompletado () {
    card.innerHTML = ""
    let buscador = document.getElementById('buscador').value
    dato2.forEach(function(pais) {
        if (pais.name.toLowerCase().includes(buscador.toLowerCase()) ) {
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
>>>>>>> 904a7fcd3cc752ccf3a85312b3beb0d7b04b430c
selec.addEventListener('click', async () => {
    const res = await fetch(url);
    const data = await res.json();
    let selec = document.querySelector("#selec").value;
    card.innerHTML = "";
<<<<<<< HEAD
=======
    console.log(selec)
>>>>>>> 904a7fcd3cc752ccf3a85312b3beb0d7b04b430c
    if (selec == "Americas") {
        let mostar = data.filter(user => user.Region === selec)
        mostar.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
            card.innerHTML += `
                <div class="card" style="width: 18rem;">
                                    <img src="${image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h1>${name}</h1>
                                        <h6 class="info">population: ${Population}</h6>
                                        <h6 class="info">region: ${Region}</h6>
                                        <h6 class="info">capital: ${capital}</h6>
                                        <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                    </div>
                                </div>
                `
        })
        document.addEventListener('DOMContentLoaded', mostar)
    } if (selec == "Africa") {
        let mostar = data.filter(user => user.Region === selec)
        mostar.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
            card.innerHTML += `
                <div class="card" style="width: 18rem;">
                                    <img src="${image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h1>${name}</h1>
                                        <h6 class="info">population: ${Population}</h6>
                                        <h6 class="info">region: ${Region}</h6>
                                        <h6 class="info">capital: ${capital}</h6>
                                        <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                    </div>
                                </div>
                `
        })
        document.addEventListener('DOMContentLoaded', mostar)
    } if (selec == "Asia") {
        let mostar = data.filter(user => user.Region === selec)
        mostar.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
            card.innerHTML += `
                <div class="card" style="width: 18rem;">
                                    <img src="${image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h1>${name}</h1>
                                        <h6 class="info">population: ${Population}</h6>
                                        <h6 class="info">region: ${Region}</h6>
                                        <h6 class="info">capital: ${capital}</h6>
                                        <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                    </div>
                                </div>
                `
        })
        document.addEventListener('DOMContentLoaded', mostar)
    } if (selec == "Europa") {
        let mostar = data.filter(user => user.Region === selec)
        mostar.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
            card.innerHTML += `
                <div class="card" style="width: 18rem;">
                                    <img src="${image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h1>${name}</h1>
                                        <h6 class="info">population: ${Population}</h6>
                                        <h6 class="info">region: ${Region}</h6>
                                        <h6 class="info">capital: ${capital}</h6>
                                        <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                    </div>
                                </div>
                `
        })

        document.addEventListener('DOMContentLoaded', mostar)
    } if (selec == 0) {
        data.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
                card.innerHTML += `
                        <div class="card" style="width: 18rem;">
                                            <img src="${image}" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h1>${name}</h1>
                                                <h6 class="info">population: ${Population}</h6>
                                                <h6 class="info">region: ${Region}</h6>
                                                <h6 class="info">capital: ${capital}</h6>
                                                <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                            </div>
                                        </div>
                        `
    })
 }
<<<<<<< HEAD
});
=======
})
>>>>>>> 904a7fcd3cc752ccf3a85312b3beb0d7b04b430c
