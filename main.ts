import { series } from "./data.js";
import { Serie } from "./serie.js";


document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("seriesTableBody");
  if (tableBody) {

    series.forEach((serie: Serie) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  const caption = document.getElementById("promediotemporadas");
  if (caption) {
    let totalTemporadas = 0;
    series.forEach((serie: Serie) => {
      totalTemporadas += serie.temporadas;
    });
    const promedio = totalTemporadas / series.length;
    caption.textContent = `Seasons average: ${promedio}`;
  }
});

