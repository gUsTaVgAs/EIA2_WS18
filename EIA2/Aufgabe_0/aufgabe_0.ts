//var i : string ="";
        
    function main() {
        var i : string = prompt("Wie heisst du?");
        var node : any = document.getElementById("content");
        node.innerHTML += "Moin ";
        node.innerHTML += i;
        node.innerHTML += ",  immer schoen Cremig bleiben";
        console.log("Moin ",i,", sei gegrüßt");
        }
    
    document.addEventListener('DOMContentLoaded',main);