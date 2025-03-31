class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    updateAnimal(newName, newSpecies, newAge) {
        this.name = newName;
        this.species = newSpecies;
        this.age = newAge;
    }
}

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(name, species, age) {
        const animal = new Animal(name, species, age);
        this.animals.push(animal);
        this.render();
    }

    updateAnimal(index) {
        const newName = prompt("New name:", this.animals[index].name);
        const newSpecies = prompt("New species:", this.animals[index].species);
        const newAge = prompt("New age:", this.animals[index].age);
        if (newName && newSpecies && newAge) {
            this.animals[index].updateAnimal(newName, newSpecies, parseInt(newAge));
            this.render();
        }
    }

    render() {
        document.body.innerHTML = "";
        const title = document.createElement("h1");
        title.textContent = "Zoo Management";
        document.body.appendChild(title);
        
        const list = document.createElement("ul");
        this.animals.forEach((animal, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${animal.name} (${animal.species}, ${animal.age} years old)`;
            
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "Modify";
            updateBtn.onclick = () => this.updateAnimal(index);
            listItem.appendChild(updateBtn);
            
            list.appendChild(listItem);
        });
        document.body.appendChild(list);

        const addButton = document.createElement("button");
        addButton.textContent = "Add New Animal";
        addButton.onclick = () => {
            const name = prompt("Animal Name:");
            const species = prompt("Species:");
            const age = prompt("Age:");
            if (name && species && age) {
                this.addAnimal(name, species, parseInt(age));
            }
        };
        document.body.appendChild(addButton);
    }
}

const myZoo = new Zoo();
myZoo.render();
