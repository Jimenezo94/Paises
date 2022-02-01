const listGroup = document.querySelector('.list-group');

const getLocalStorage = () => {
   const det = JSON.parse(localStorage.getItem("Detail"));
   const {name,Population,image,Region,capital} = det;
   listGroup.innerHTML += `
   <li class="card" style="width: 8px;">
   <div class="card-body">
    <img src=${image} class="card-img-top" alt="..." style="width: 300px;>
     <h5 class="card-title">${name}</h5>
     <p class="card-text">${Population}</p>
     <p class="card-title">${Region}</p>
     <p class="card-text">${capital}</p>

     <a href="#" class="btn btn-outline-dark " style="background-color: #ccc2bb;">Return</a>
   </div>
 </li>
   `
}

document.addEventListener('DOMContentLoaded',getLocalStorage)

listGroup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-outline-dark')){
        window.location.href = "index.html";
    }
 
})