
// Fetch utilizando .then()
let url = "https://hp-api.onrender.com/api/characters";

fetch(url) // Se realiza la petición
  .then(res => res.json())    // Se resuelve la promesa, y se recibe la respuesta (res)
  .then(data => console.log("Personajes:", data))   // Termina la conversión
  .catch(error => console.log("Error al conectarse a la API:", error));   // Si algo falla en cualquier paso, se entra al catch

// Fetch utilizando async y await
async function pedirPersonajes() {
  let url = "https://hp-api.onrender.com/api/characters";
  try {
    const res = await fetch(url);     // Esperamos a que fetch() traiga la respuesta
    const data = await res.json();    // Esperamos a que se convierta a JSON
    console.log("Personajes:", data);
  } catch (error) {
    console.log("Error al conectarse a la API:", error);
  }
}

pedirPersonajes();

