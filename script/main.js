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