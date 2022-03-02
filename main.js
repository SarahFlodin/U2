"use strict";

// Skapar en ny dessert och returnar desserten
function createNewDessert(name, flavor, kalories, shape, glutenfree) {
    let dessert = {
        name: name,
        flavor: flavor,
        kalories: kalories,
        shape, shape,
        glutenfree: glutenfree,
    }

    return dessert;
}

// lägger till nya desserten till vår "database"
function addDessertToDatabase(database, dessert) {
    database.push(dessert);
}

// Tar bort desserten baserat på dess namn från databasen
function removeDessertbyId(desserts, id) {
    for (let i = 0; i < database.length; i++) {
        // nuvarande desserten av loopen
        let dessert = database[i];
        // kollar om dessertens namn matchar med namnet
        if (dessert.id == id) {
            // If stämmer, tas desserten bort
            dessert.splice(i, 1)
            return;
        }
    }
}

// Returnerar desserten baserat på deras smak "flavor"
function getDessertsByFlavor (desserts, flavor) {
    let dessertsByFlavor = [];
//Skapar en if loop så det inte spelar roll om små eller stora bokstäver används och matchar med smaken
    for (let desserts of dessert) {
        if (dessert.flavor.toLowerCase() == flavor.toLowerCase()) {
            dessertsByFlavor.push(dessert);
        }
    }
    return dessertsByFlavor;
}

// Returnerar desserten baserat på deras kalorier
function getDessertsByKalories (desserts, kalories) {
    let dessertsByKalories = [];
//Skapar en if loop så det inte spelar roll om små eller stora bokstäver används och matchar med smaken
    for (let desserts of dessert) {
        if (dessert.kalories == kalories) {
            dessertsByKalories.push(dessert);
        }
    }
    return dessertsByKalories;
}

// Returnerar desserten baserat på deras form "shape"
function getDessertsByShape (desserts, shape) {
    let dessertsByShape = [];
//Skapar en if loop så det inte spelar roll om små eller stora bokstäver används och matchar med smaken
    for (let desserts of dessert) {
        if (dessert.shape.toLowerCase() == flavor.toLowerCase()) {
            dessertsByShape.push(dessert);
        }
    }
    return dessertsByShape;
}

// Returnerar desserten baserat på om dem är glutenfria
function getDessertsByFlavor (desserts, glutenfree) {
    let dessertsByGlutenfree = [];
//Skapar en if loop så det inte spelar roll om små eller stora bokstäver används och matchar med smaken
    for (let desserts of dessert) {
        if (dessert.glutenfree.toLowerCase() == glutenfree.toLowerCase()) {
            dessertsByGlutenfree.push(dessert);
        }
    }
    return dessertsByGlutenfree;
}

//Skapar en dessert objekt till HTML element
function renderDessert(dessert) {
    let div = document.createElement("div");
    div.classList.add("dessert");
    div.id = dessert.id;
    div.innerHTML = `
        <div>${dessert.name}</div>
        <div>${dessert.flavor}</div>
        <div>${dessert.kalories}</div>
        <div>${dessert.shape}</div>
        <div>${dessert.glutenfree}</div>
        <button type="button"> Remove </button>
        `;

    return div;
}
