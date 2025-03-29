function initializeChartTable() {
    const chartSection = document.getElementById("chart-section");
    if (!chartSection) {
        console.warn("A chart-section div nem található!");
        return;
    }

    const tableElement = document.getElementById("dataTable");
    const canvasElement = document.getElementById("lineChart");

    if (!tableElement || !canvasElement) {
        console.warn("A dataTable vagy lineChart nem található!");
        return;
    }

    // Ellenőrizzük, hogy már volt-e korábban chart és töröljük
    if (Chart.getChart(canvasElement)) {
        Chart.getChart(canvasElement).destroy();
    }

    const table = tableElement.getElementsByTagName("tbody")[0];
    table.innerHTML = ""; // Előző adatokat töröljük

    const chartCanvas = canvasElement.getContext("2d");

    const data = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)));

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

    const chartData = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: "Kijelölt sor",
            data: [],
            borderColor: "blue",
            fill: false
        }]
    };

    const lineChart = new Chart(chartCanvas, {
        type: "line",
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    table.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            const rowIndex = event.target.parentElement.dataset.rowIndex;
            chartData.datasets[0].data = data[rowIndex];
            lineChart.update();
        }
    });
}
