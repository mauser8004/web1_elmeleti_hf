if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    function();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        function();
    });
}
// Alaposztály: Animal (Általános állati tulajdonságok)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    describe() {
        return `${this.name} egy ${this.species}.`;
    }
}

// Alosztály: Emlős (Mammal)
class Mammal extends Animal {
    constructor(name, species, hasFur) {
        super(name, species);
        this.hasFur = hasFur;
    }

    describe() {
        return super.describe() + ` ${this.hasFur ? "Szőrös állat." : "Nem szőrös állat."}`;
    }
}

// Alosztály: Madár (Bird)
class Bird extends Animal {
    constructor(name, species, canFly) {
        super(name, species);
        this.canFly = canFly;
    }

    describe() {
        return super.describe() + ` ${this.canFly ? "Tud repülni." : "Nem tud repülni."}`;
    }
}

// Állatokat tartalmazó lista
const animals = [
    new Mammal("Laci", "Emlős", true),
    new Bird("Pisti", "Madár", true),
    new Mammal("Béla", "Emlős", false),
    new Bird("Maci", "Madár", false)
];

// Az állatok listájának megjelenítése
document.getElementById("showAnimals").addEventListener("click", function() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<h2>Állatok a kertben:</h2>";
    
    const ul = document.createElement("ul");

    animals.forEach(animal => {
        const li = document.createElement("li");
        li.textContent = animal.describe();
        ul.appendChild(li);
    });

    contentDiv.appendChild(ul);
});

