function initChartTable() {
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const chartContainer = document.getElementById("lineChart");

    if (!table || !chartContainer) {
        console.error("Hiba: Az elem(ek) nem található(k)!");
        return;
    }

    const data = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)));

    table.innerHTML = "";
    data.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");
        tr.dataset.rowIndex = rowIndex;
        row.forEach(num => {
            const td = document.createElement("td");
            td.textContent = num;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    table.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            const rowIndex = event.target.parentElement.dataset.rowIndex;
            drawLineChart(data[rowIndex]);
        }
    });

    function drawLineChart(rowData) {
        chartContainer.innerHTML = ""; // Törli az előző grafikont

        const maxValue = Math.max(...rowData);
        const containerHeight = 200; // A diagram magassága
        const containerWidth = 500; // A diagram szélessége

        const pointSpacing = containerWidth / (rowData.length - 1);

        let lastPoint = null;

        rowData.forEach((value, index) => {
            const yPos = containerHeight - (value / maxValue) * containerHeight;
            const xPos = index * pointSpacing;

            const point = document.createElement("div");
            point.className = "chart-point";
            point.style.left = `${xPos}px`;
            point.style.top = `${yPos}px`;

            chartContainer.appendChild(point);

            if (lastPoint) {
                const line = document.createElement("div");
                line.className = "chart-line";
                const deltaX = xPos - lastPoint.x;
                const deltaY = yPos - lastPoint.y;
                const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

                line.style.width = `${length}px`;
                line.style.left = `${lastPoint.x}px`;
                line.style.top = `${lastPoint.y}px`;
                line.style.transform = `rotate(${angle}deg)`;

                chartContainer.appendChild(line);
            }

            lastPoint = { x: xPos, y: yPos };
        });
    }
}