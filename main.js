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

//Skickar en dessert objekt till HTML element
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

// Skickar en array av desserter till HTML
function renderDesserts(desserts) {
    let dessertsElement = document.getElementById("desserts");
    dessertsElement.innerHTML = "";


//Gå igenom alla desserter och lägger in deras HTML
for (let dessert of desserts) {
    let dessertElement = renderDessert(dessert);
    dessertsElement.appendChild(dessertElement)
}
// Lägg till ta bort funktionen för våra desserter
    setRemoveDessertHandlers();
}

// När formuläret är ifyllt och inskickat
function onAddDessertSubmit(event) {
    // Hindrar forumuläret att uppdatera sidan
    event.preventDefault();

    let name = document.getElementById("dessert").value;
    let flavor = document.getElementById("flavor").value;
    let kalories = Number(document.getElementById("kalories").value);
    let shape = document.getElementById("shape").value;
    let glutenfree = document.getElementById("glutenfree").value;


    //Varna om alla rutor ej är ifyllda
    if (name == ""){
        alert("You have to fill in the name of the dessert")
    }else if (flavor == ""){
        alert("You have to fill in the flavor of the dessert")
    }else if (kalories == ""){
        alert("You have to fill in the amount kalories in the dessert")
    }else if (shape == ""){
        alert("You have to fill in the shape of the dessert")
    }else if (glutenfree == ""){
        alert("You have to fill in if the dessert are glutenfree")
    }

    let dessert = createNewDessert(name, flavor, kalories, shape, glutenfree);

    //Kalkulera nya id:t till desserten
    dessert.id = database[database.length - 1].id + 1;

    addDessertToDatabase(database, dessert)
    renderDesserts(database);

    // Tömmer alla formulärs fält (reset)
    let form = document.getElementById("add-dessert-form")
    form.reset();
}

// Lägger till "click" eventet till knappen
function setAddDessertClick(event) {
    let form = document.getElementById("add-dessert-form");
    form.addEventListener("submit", onAddDessertSubmit);
}

// När användaren klickar på remove
function onRemoveDessertClick(event) {
    let button = event.target;
    let id = button.parentElement.id;

    // Använder globala variabeln "database" och konfimerar att jag ska ta bort
    if (window.confirm("Do you really want to remove this dessert?")) {
        removeDesserts(database);
    }

    // Återskapar sidan utan den borttagna desserten
    renderDesserts(database);
}

//Adderar "click" eventet till alla remove knappar
function setRemoveDessertHandlers() {
    let buttons = document.querySelectorAll(".dessert button");

    for (let button of buttons) {
        button.addEventListener("click", onRemoveDessertClick)
    }
}

//Filtrera desserter genom smak "flavor"
function onFilterByFlavorSubmit (event) {
    event.preventDefault();
    // Vilken smak
    let flavor = document.getElementById("filter-flavor").value;
    // Hämta desserter genom smak
    let desserts = getDessertsByFlavor(database, flavor);
    //Återskapa desserterna
    renderDesserts(desserts);
}

//Filtrera desserter genom kalorier
function onFilterByKaloriesSubmit (event) {
    event.preventDefault();
    // Hur många kalorier
    let kalories = document.getElementById("filter-kalorier").value;
    // Hämta desserter genom smak
    let desserts = getDessertsByKalories(database, kalories);
    //Återskapa desserterna
    renderDesserts(desserts);
}
//Filtrera desserter genom form "shape"
function onFilterByShapesSubmit (event) {
    event.preventDefault();
    // Vilken form?
    let shape = document.getElementById("filter-shape").value;
    // Hämta desserter genom smak
    let desserts = getDessertsByFlavor(database, shape);
    //Återskapa desserterna
    renderDesserts(desserts);
}

//Filtrera desserter genom glutenfree
function onFilterByGlutenfreeSubmit (event) {
    event.preventDefault();
    // Är de glutenfria yes/no
    let glutenfree = document.getElementById("filter-glutenfree").value;
    // Hämta desserter genom om dem är glutenfria yes/no
    let desserts = getDessertsByGlutenfree(database, glutenfree);
    //Återskapa desserterna
    renderDesserts(desserts);
}

//Visar alla värden
function onShowAllClick() {
    document.getElementById("filter-flavor").value = "";
    document.getElementById("filter-kalories").value = "";
    document.getElementById("filter-shape").value = "";
    document.getElementById("filter-glutenfree").value = "";
    renderDesserts(database);
}
// Sätter filter på värden och visa alla värden
function setFilterDessertHandlers() {
    let flavorForm = document.getElementById("filter-by-flavor");
    let kaloriesForm = document.getElementById("filter-by-kalories");
    let shapeForm = document.getElementById("filter-by-shape");
    let glutenfreeForm = document.getElementById("filter-by-glutenfree");
    let showAll = document.getElementById("show-all");
// Det som ska hända när man submittar värdet
    flavorForm.addEventListener("submit", onFilterByFlavorSubmit);
    kaloriesForm.addEventListener("submit", onFilterByKaloriesSubmit);
    shapeForm.addEventListener("submit", onFilterByShapesSubmit);
    glutenfreeForm.addEventListener("submit", onFilterByGlutenfreeSubmit);
    showAll.addEventListener("submit", onShowAllClick);
}

//Inleder sidan
renderDesserts(database);
setAddDessertHandler();
setFilterDessertHandlers();