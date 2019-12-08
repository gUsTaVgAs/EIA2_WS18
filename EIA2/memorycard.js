"use strict";
let kartenwerte = ["1", "2", "3", "4", "5"];
function createCard() {
    let x = document.getElementById("Spielfeld");
    let card = document.createElement("div");
    card.innerHTML = kartenwerte[0];
    x.appendChild(card);
}
createCard();
/* function createplayers(): void {
    let x: HTMLElement = document.getElementById("Spielfeld");
    let playerone: string = <string>document.getElementById("namespieler1").value;
    let tableone: HTMLDivElement = document.createElement("div");
    tableone.innerHTML = playerone;
    x.appendChild(tableone);
}

createplayers(); */
//# sourceMappingURL=memorycard.js.map