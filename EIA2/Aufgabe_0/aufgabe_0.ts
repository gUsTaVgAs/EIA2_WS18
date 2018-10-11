
        
    function main(): void {
        var i: string = prompt("Wie heisst du?");
        var node: HTMLElement = document.getElementById("content");
        node.innerHTML += "Moin ";
        node.innerHTML += i;
        node.innerHTML += ",  immer schoen Cremig bleiben";
        console.log("Moin ", i, ", sei gegrüßt");
        }
    
    document.addEventListener("DOMContentLoaded", main);