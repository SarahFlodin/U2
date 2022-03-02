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