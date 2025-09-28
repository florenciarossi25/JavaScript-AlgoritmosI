// Correr este código en Apps Scrip dentro de un Google Sheets
// Se ejecuta al abrir la planilla: agrega el menú
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Personajes HP")
    .addItem("Cargar personajes", "cargarPersonajes")
    .addToUi();
}

// Función principal: obtiene personajes y llena la hoja
function cargarPersonajes() {
  let url = "https://hp-api.onrender.com/api/characters";
  let respuesta = UrlFetchApp.fetch(url);        // 1. Hacemos la petición
  let personajes = JSON.parse(respuesta.getContentText()); // 2. Parseamos el JSON

  let hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  hoja.clear(); // Limpia la hoja antes de escribir

  // 3. Escribimos los encabezados
  hoja.getRange(1, 1).setValue("Nombre");
  hoja.getRange(1, 2).setValue("Casa");
  hoja.getRange(1, 3).setValue("Actor");

  // 4. Recorremos los primeros 10 personajes y completamos filas
  for (let i = 0; i < 10; i++) {
    let p = personajes[i];
    hoja.getRange(i + 2, 1).setValue(p.name);
    hoja.getRange(i + 2, 2).setValue(p.house);
    hoja.getRange(i + 2, 3).setValue(p.actor);
  }
}