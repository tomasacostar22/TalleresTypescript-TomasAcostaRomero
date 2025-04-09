import { series } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("seriesTableBody");
    const cardContainer = document.getElementById("serieCard");
    if (tableBody) {
        series.forEach((serie) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td class="nombre-serie text-primary text-decoration-underline" style="cursor: pointer;" data-id="${serie.id}">
        ${serie.nombre}
        </td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
      `;
            tableBody.appendChild(tr);
        });
        // Delegamos el evento clic en el cuerpo de la tabla
        tableBody.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("nombre-serie")) {
                const id = Number(target.getAttribute("data-id"));
                const selectedSerie = series.find(s => s.id === id);
                if (selectedSerie && cardContainer) {
                    cardContainer.innerHTML = `
            <div class="card">
              <img src="${selectedSerie.imagen}" class="card-img-top" alt="${selectedSerie.nombre}">
              <div class="card-body">
                <h5 class="card-title">${selectedSerie.nombre}</h5>
                <p class="card-text">${selectedSerie.descripcion}</p>
                <p class="mt-3">
                <a href="${selectedSerie.link}" target="_blank" class="text-primary" style="text-decoration: underline; word-break: break-all;">
                  ${selectedSerie.link}
                </a>
              </p>
              </div>
            </div>
          `;
                }
            }
        });
    }
    const caption = document.getElementById("promediotemporadas");
    if (caption) {
        let totalTemporadas = 0;
        series.forEach((serie) => {
            totalTemporadas += serie.temporadas;
        });
        const promedio = totalTemporadas / series.length;
        caption.textContent = `Seasons average: ${promedio}`;
    }
});
