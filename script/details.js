const listGroup = document.querySelector('.list-group');

const getLocalStorage = () => {
   const det = JSON.parse(localStorage.getItem("Detail"));
   const {name,Population,image,Region,capital, detalle} = det;
   listGroup.innerHTML += `<div class="card1" style="width: 18rem;">
   <img src="${image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h1 class="card-title">${name}</h1>
     <h6><b>Population: </b>${Population}</h6>
     <h6><b>Region: </b>${Region}</h6>
     <h6><b>Capiital: </b>${capital}</h6>
     <p><b>Descripcion: </b>${detalle}</p>
   </div>
 </div>
   `
}
document.addEventListener('DOMContentLoaded',getLocalStorage)

listGroup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-outline-dark')){
        window.location.href = "index.html";
    }
 
})