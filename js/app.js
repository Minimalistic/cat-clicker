
function pet(name, photo, owner, species, 
             breed, gender, color, clicks) {
                this.name = name;
                this.photo = photo;
                this.owner = owner;
                this.species = species;
                this.breed = breed;
                this.gender = gender;
                this.color = color;
                this.clicks = clicks;
}

var animalCharlie = new pet("Charlie",
                            "img/charlie_IMG_0231.jpg",
                            "Jason Marsh",
                            "Feline",
                            "Ragdoll",
                            "Male",
                            "Orange & White",
                            "0");


var animalFrida = new pet("Frida",
                          "img/frida_IMG_2093.jpg",
                          "Jason Marsh",
                          "Feline",
                          "Ragdoll",
                          "Female",
                          "Brown & Tan",
                          "0");


document.getElementById("charlie_ListButton").onclick = displayAnimalCharlie;
function displayAnimalCharlie() {
    document.getElementById("active_Cat_Name").innerHTML =
        animalCharlie.name;
    document.getElementById("active_Cat_Photo").src =
        animalCharlie.photo;
    document.getElementById("active_Cat_Info").innerHTML =
        "Owner Name: " + animalCharlie.owner + "<br>" +
        "Species: " + animalCharlie.species + "<br>" +
        "Breed: " + animalCharlie.breed + "<br>" +
        "Sex: " +  animalCharlie.gender + "<br>" +
        "Color: " + animalCharlie.color; 
}

document.getElementById("frida_ListButton").onclick = displayAnimalFrida;
function displayAnimalFrida() {
    document.getElementById("active_Cat_Name").innerHTML = 
        animalFrida.name;
    document.getElementById("active_Cat_Photo").src =
        animalFrida.photo;
    document.getElementById("active_Cat_Info").innerHTML = 
        "Owner Name: " + animalFrida.owner + "<br>" +
        "Species: " + animalFrida.species + "<br>" +
        "Breed: " + animalFrida.breed + "<br>" +
        "Sex: " +  animalFrida.gender + "<br>" +
        "Color: " + animalFrida.color; 
}

document.getElementById("active_Cat_Photo").onclick = countClick;
function countClick() {
    if (animalCharlie.photo) {
        animalCharlie.clicks ++;
    } else if (animalFrida.photo) {
               animalFrida.clicks ++;
    }
}