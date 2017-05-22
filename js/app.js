document.getElementById("catButton").onclick = displayClickCount;

var number = 0;
function displayClickCount() {
    number ++;
    document.getElementById("clickCount").innerHTML = number;
}
