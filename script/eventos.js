export const showData = async(lista, card) =>{
    const dato = await lista
    dato.forEach(element => {
        const { id, name, image, Population, Region, capital } = element;
        card.innerHTML += `
        <div class="card" style="width: 18rem;">
         <img src="${image}" class="card-img-top" alt="">
         <div class="card-body">
        <h3>${name}</h3>
        <h6 class="info">population: ${Population}</h6>
        <h6 class="info">region: ${Region}</h6>
        <h6 class="info">capital: ${capital}</h6>
         <a href="#" id=${id} class="btn btn-outline-dark " style="background-color: #db7093;">Detail</a>
       
        </div>
        </div>
        `
    }) 
};
