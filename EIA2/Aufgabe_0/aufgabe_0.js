//var i : string ="";
function main() {
    var i = prompt("Wie heisst du?");
    var node = document.getElementById("content");
    node.innerHTML += "Moin ";
    node.innerHTML += i;
    node.innerHTML += ",  immer sch�n Cremig bleiben";
    console.log("Moin ", i, ", sei gegr��t");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=aufgabe_0.js.map