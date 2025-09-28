# 🧩 Ejercicio integrador – Apps Script + API + Google Sheets

Queremos usar la **API de Harry Potter** para completar automáticamente una planilla de empleados en **Google Sheets**.  

---

## 📌 Consigna
1. Crear un **menú personalizado** en la planilla llamado `Personajes HP`.  
   - Opción: **Cargar personajes**.  

2. Cuando se haga clic en esa opción, el script debe:  
   - Hacer una petición a la API de personajes:  
     ```
     https://hp-api.onrender.com/api/characters
     ```
   - Tomar los primeros 10 personajes.
   - Llenar las columnas de la hoja con la siguiente información:  
     - Columna A → Nombre  
     - Columna B → Casa  
     - Columna C → Actor  
