const getDatos = async(url) =>{
    const res = await fetch(url);
    const dato = await res.json();
    return dato;
    
}
export default getDatos;