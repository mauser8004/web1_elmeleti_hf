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
            loadContent('home.html', document.querySelector("nav ul li a"));
        });
