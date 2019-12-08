let kartenwerte: string[] = ["1", "2", "3", "4", "5"];

function createCard(): void {
    let x: HTMLElement = <HTMLDivElement>document.getElementById("Spielfeld");
    let card: HTMLElement = document.createElement("div");
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

