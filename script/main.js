import { url } from "./url.js";
import getDatos from "./getDatos.js";
import { showData } from "./eventos.js";

const card = document.querySelector("#ro");
let selec = document.querySelector(".form-select");

document.addEventListener('DOMContentLoaded', () =>{
    const data = getDatos(url);
    showData(data, card);
});

selec.addEventListener('click', async () => {
    const res = await fetch(url);
    const data = await res.json();
    let selec = document.querySelector("#selec").value;
    card.innerHTML = "";
    if (selec == "Americas") {
        let mostar = data.filter(user => user.Region === selec)
        mostar.forEach(element => {
            const { id, name, image, Population, Region, capital } = element;
            card.innerHTML += `
                <div class="card" style="width: 18rem;">
                                    <img src="${image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h3>${name}</h3>
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
                                        <h3>${name}</h3>
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
                                        <h3>${name}</h3>
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
                                        <h3>${name}</h3>
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
                                                <h3>${name}</h3>
                                                <h6 class="info">population: ${Population}</h6>
                                                <h6 class="info">region: ${Region}</h6>
                                                <h6 class="info">capital: ${capital}</h6>
                                                <input id="${id}" class="btn btn-primary" type="submit" value="DETALLE">
                                            </div>
                                        </div>
                        `
    })
 }
});