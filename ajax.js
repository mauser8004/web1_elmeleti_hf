code="F6BHFEabc123";
url="http://gamf.nhely.hu/ajax2/";

async function read() {
    document.getElementById("code").innerHTML = "code=" + "Titkos :)";
    let response = await fetch(url, {
        method: 'post',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "code=" + code + "&op=read"
    });

    let data = await response.text();
    data = JSON.parse(data);
    let list = data.list;

    let str = "<H1>Read</H1>";
    str += "<p>Number of records: " + data.rowCount + "</p>";
    str += "<p>Last max " + data.maxNum + " records:</p>";

    // Create the table
    str += "<table><tr><th>id</th><th>name</th><th>height</th><th>weight</th></tr>";
    let heights = [];  // Array to store the height values for analysis

    for (let i = 0; i < list.length; i++) {
        str += "<tr><td>" + list[i].id + "</td><td>" + list[i].name + "</td><td>" + list[i].height + "</td><td>" + list[i].weight + "</td><td>";
        heights.push(parseInt(list[i].height));  // Add height to the array for analysis
    }

    str += "</table>";

    // Analysis of height values: sum, average, and max
    if (heights.length > 0) {
        let sum = heights.reduce((acc, curr) => acc + curr, 0);
        let average = sum / heights.length;
        let max = Math.max(...heights);

        str += "<h3>Height Adatok</h3>";
        str += "<p>heights összeg: " + sum + "</p>";
        str += "<p>height átlag: " + average.toFixed(2) + "</p>";
        str += "<p>height legnagyobb: " + max + "</p>";
    }

    document.getElementById("readDiv").innerHTML = str;
}

async function create() {
    let nameStr = document.getElementById("name1").value;
    let heightInput = document.getElementById("height1").value;
    let weightInput = document.getElementById("weight1").value;

    // Numerikus értékek konvertálása és ellenőrzése
    let height = parseInt(heightInput);
    let weight = parseInt(weightInput);

    // Validáció
    if (
        nameStr.length > 0 && 
        nameStr.length <= 30 && 
        !isNaN(height) && 
        !isNaN(weight) &&
        height >= 50 && height <= 250 &&  // Ésszerű magasság tartomány (cm)
        weight >= 10 && weight <= 210     // Ésszerű súly tartomány (kg)
    ) {
        let response = await fetch(url, {
            method: 'post',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "code=" + code + "&op=create&name=" + nameStr + "&height=" + height + "&weight=" + weight
        });
        let data = await response.text();
        document.getElementById("createResult").innerHTML = data > 0 ? "Create successful!" : "Create NOT successful!";
        document.getElementById("name1").value = "";
        document.getElementById("height1").value = "";
        document.getElementById("weight1").value = "";
        read();
    } else {
        document.getElementById("createResult").innerHTML = "Nem megfelelő adatbevitel! Ellenőrizni kell a bevitt adatokat (height: 50-250 cm, weight: 10-210 kg).";
    }
}

async function getDataForId() {
    let response = await fetch(url, {
        method: 'post',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "code=" + code + "&op=read"
    });
    let data = await response.text();
    data = JSON.parse(data);
    let list = data.list;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == document.getElementById("idUpd").value) {
            document.getElementById("name2").value = list[i].name;
            document.getElementById("height2").value = list[i].height;
            document.getElementById("weight2").value = list[i].weight;
        }
    }
}

async function update() {
    let id = document.getElementById("idUpd").value;
    let nameStr = document.getElementById("name2").value;
    let height = document.getElementById("height2").value;
    let weight = document.getElementById("weight2").value;
    if (id.length > 0 && id.length <= 30 && nameStr.length > 0 && nameStr.length <= 30 && height.length > 1 && height.length <= 250 && weight.length > 1 && weight.length <= 210) {
        let response = await fetch(url, {
            method: 'post',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "code=" + code + "&op=update&id=" + id + "&name=" + nameStr + "&height=" + height + "&weight=" + weight
        });
        let data = await response.text();
        document.getElementById("updateResult").innerHTML = data > 0 ? "Módosítás sikeres!" : "Módósítás NEM sikerült!";
        document.getElementById("idUpd").value = "";
        document.getElementById("name2").value = "";
        document.getElementById("height2").value = "";
        document.getElementById("weight2").value = "";
        read();
    } else {
        document.getElementById("updateResult").innerHTML = "Validation error!!";
    }
}

async function deleteF() {
    let id = document.getElementById("idDel").value;
    if (id.length > 0 && id.length <= 30) {
        let response = await fetch(url, {
            method: 'post',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "code=" + code + "&op=delete&id=" + id
        });
        let data = await response.text();
        document.getElementById("deleteResult").innerHTML = data > 0 ? "Törlés sikeres!" : "Törlés sikertelen!";
        document.getElementById("idDel").value = "";
        read();
    } else {
        document.getElementById("deleteResult").innerHTML = "Validation error!!";
    }
}

window.onload = function() {
    read();
};

