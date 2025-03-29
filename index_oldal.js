//menu betoltese
function loadContent(page, menuItem) {
            // Betöltés a content div-be
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
                .catch(error => console.error('Hiba történt:', error));

            // Aktív menü módosítása
            document.querySelectorAll("nav ul li a").forEach(a => a.classList.remove("active"));
            menuItem.classList.add("active");
        }

        document.addEventListener("DOMContentLoaded", () => {
            loadContent('table.html', document.querySelector("nav ul li a"));
        });


/////
////////table.html hez a CRUD
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

        if (name.length < 3 || city.length < 2 || age < 1 || age > 120 || email.length < 5) {
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
/////////////////CRUD vege
/////web worker API
function bigLoop(){
  for (var i = 0; i <= 100000; i += 1)
  var j = i;
  alert("Kész " + j + "ciklus" );
  }
function sayHello(){
  alert("Szép Napot!" );
  }
//web worker API vége
////sse
                const x = document.getElementById("result");
                // Check browser support for SSE
                if(typeof(EventSource) !== "undefined") {
                  var source = new EventSource("demo_sse.php");
                  source.onmessage = function(event) {
                    x.innerHTML += event.data + "<br>";
                  };
                } else {
                  x.innerHTML = "Sorry, no support for server-sent events.";
                }

//sse vege
//DRAG DROP API

function dragstartHandler(ev) {
  ev.dataTransfer.setData("ikongamf", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("ikongamf");
  ev.target.appendChild(document.getElementById(data));
}
////GRAD DROP VEGE
///canvas
function myCanvas() {
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.strokeStyle = "red";
ctx.stroke();
}
//canvas vege

