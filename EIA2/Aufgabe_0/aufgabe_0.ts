var i : string ="";
        
    function main() {
        var i = prompt("Wie hei�t du?");
        var node : any = document.getElementById("content");
        node.innerHTML += "Moin";
        node.innerHTML += i;
        node.innerHTML += ",  immer sch�n Cremig bleiben";
        console.log("Moin",i,", sei gegr��t");
        }
    
    document.addEventListener('DOMContentLoaded',main);