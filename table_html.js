    <script>
    let tableData = [
        { name: "Gipsz Jakab", age: 30, city: "Budapest", email: "jakab@example.com" }
    ];
    let editIndex = null;

    function renderTable() {
        let tbody = document.querySelector("#dataTable tbody");
        tbody.innerHTML = "";
        tableData.forEach((row, index) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.city}</td>
                <td>${row.email}</td>
                <td>
                    <button onclick="editRow(${index})">Szerkesztés</button>
                    <button onclick="deleteRow(${index})">Törlés</button>
                </td>`;
            tbody.appendChild(tr);
        });
    }

    function openModal(index = null) {
        document.getElementById("modal").style.display = "block";
        document.getElementById("modalTitle").innerText = index !== null ? "Sor szerkesztése" : "Új sor hozzáadása";

        if (index !== null) {
            let row = tableData[index];
            document.getElementById("nameInput").value = row.name;
            document.getElementById("ageInput").value = row.age;
            document.getElementById("cityInput").value = row.city;
            document.getElementById("emailInput").value = row.email;
            editIndex = index;
        } else {
            document.getElementById("nameInput").value = "";
            document.getElementById("ageInput").value = "";
            document.getElementById("cityInput").value = "";
            document.getElementById("emailInput").value = "";
            editIndex = null;
        }
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    function saveRow() {
        let name = document.getElementById("nameInput").value.trim();
        let age = document.getElementById("ageInput").value.trim();
        let city = document.getElementById("cityInput").value.trim();
        let email = document.getElementById("emailInput").value.trim();

        if (!name || !age || !city || !email) {
            alert("Minden mező kitöltése kötelező!");
            return;
        }

        if (name.length < 3 || city.length < 2 || age < 1 || age > 120) {
            alert("Érvénytelen adatok!");
            return;
        }

        let newRow = { name, age, city, email };

        if (editIndex !== null) {
            tableData[editIndex] = newRow;
        } else {
            tableData.push(newRow);
        }

        renderTable();
        closeModal();
    }

    function editRow(index) {
        openModal(index);
    }

    function deleteRow(index) {
        if (confirm("Biztosan törölni szeretnéd ezt a sort?")) {
            tableData.splice(index, 1);
            renderTable();
        }
    }

    function sortTable(columnIndex) {
        let keys = ["name", "age", "city", "email"];
        let key = keys[columnIndex];
        let isNumeric = columnIndex === 1;

        tableData.sort((a, b) => {
            let x = a[key].toString().toLowerCase();
            let y = b[key].toString().toLowerCase();
            return isNumeric ? x - y : x.localeCompare(y);
        });

        renderTable();
    }

    function filterTable() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let tbody = document.querySelector("#dataTable tbody");

        Array.from(tbody.rows).forEach(row => {
            let showRow = Array.from(row.cells).slice(0, -1).some(cell => cell.innerText.toLowerCase().includes(input));
            row.style.display = showRow ? "" : "none";
        });
    }

    document.addEventListener("DOMContentLoaded", renderTable);
</script>
