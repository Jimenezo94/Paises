import { url } from "./url.js";
import getDatos from "./getDatos.js";
import { showData } from "./eventos.js";
const card = document.querySelector("#ro");
const staticBackdrop = document.querySelector("#staticBackdrop");

let selec = document.querySelector(".form-select");

document.addEventListener('DOMContentLoaded', () => {
    const data = getDatos(url);
    showData(data, card);
});

const res = await fetch(url);
const dato2 = await res.json();
document.addEventListener('keyup', autocompletado)
function autocompletado() {
    card.innerHTML = ""
    let buscador = document.getElementById('buscador').value
    dato2.forEach(function (pais) {
        if (pais.name.toLowerCase().includes(buscador.toLowerCase())) {
            const { id, name, image, Population, Region, capital } = pais;
            card.innerHTML += `
         <div class="card" style="width: 18rem;">
                             <img src="${image}" class="card-img-top" alt="">
                             <div class="card-body">
                                 <h1>${name}</h1>
                                 <h6 class="info">population: ${Population}</h6>
                                 <h6 class="info">region: ${Region}</h6>
                                 <h6 class="info">capital: ${capital}</h6>
                                 <input class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="Submit">
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
        document.body.classList.toggle('light-theme');
        document.card.classList.toggle('light-theme');

    } else {
        document.body.classList.toggle('dark-theme');
        document.card.classList.toggle('dark-theme');

    }

});

selec.addEventListener('click', async () => {
    const res = await fetch(url);
    const data = await res.json();
    let selec = document.querySelector("#selec").value;
    card.innerHTML = "";
    console.log(selec)
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
                                        <input id="${id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="DETALLE">
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
                                        <input id="${id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="DETALLE">
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
                                        <input id="${id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="DETALLE">
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
                                        <input id="${id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="DETALLE">
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
                                                <input id="${id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" value="DETALLE">
                                            </div>
                                        </div>
                        `
        })
    }
});

const button = document.querySelector(".btn-primary");
button.addEventListener('click', async () => {
    const res = await fetch(url);
    const data = await res.json();
    data.forEach(element => {
        const { name, image, Population, Region, capital } = element;
        staticBackdrop.innerHTML += ``
    })
})