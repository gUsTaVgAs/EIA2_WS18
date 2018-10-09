var i : string ="";
        
    function main() {
        var i = prompt("Wie heißt du?");
        var node : any = document.getElementById("content");
        node.innerHTML += "Moin";
        node.innerHTML += i;
        node.innerHTML += ",  immer schön Cremig bleiben";
        console.log("Moin",i,", sei gegrüßt");
        }
    
    document.addEventListener('DOMContentLoaded',main);