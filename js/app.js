document.getElementById("charlie_CatButton").onclick = displayCharlieCatInfo;
document.getElementById("frida_CatButton").onclick = displayFridaCatInfo;

var charlie_CatClicks = 0;
document.getElementById("catName_Charlie").innerHTML = "Charlie";
function displayCharlieCatInfo() {
    charlie_CatClicks ++;
    document.getElementById("charlie_CatClickCount").innerHTML = charlie_CatClicks;
}

var frida_CatClicks = 0;
document.getElementById("catName_Frida").innerHTML = "Frida";
function displayFridaCatInfo() {
    frida_CatClicks ++;
    document.getElementById("frida_CatClickCount").innerHTML = frida_CatClicks;
}