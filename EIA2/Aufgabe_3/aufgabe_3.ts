namespace A3 {
    let hand: string[] = [];
    let pile: string[] = [];
    let allCards: string[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA", "r+2", "r+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA", "g+2", "g+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA", "b+2", "b+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA", "y+2", "y+2",
        "z+4", "z+4", "z+4", "z+4", "zWahl", "zWahl", "zWahl", "zWahl"];



    function main(): void {

        let handCards: number = parseInt(prompt("Wie viele Karten duerfen's denn sein? (10 max.) "));
        if (handCards > 10) {
            handCards = 10;
        }

        for (let i: number = 0; i < handCards; i++) {
            let maxNumber: number = allCards.length;
            let randomNum: number = getRandom(maxNumber);
            let card: string = allCards.splice(randomNum, 1)[0];
            hand.push(card);

        }
        createCards(hand);

        function createCards(_values: string[]): void {

            for (let i: number = 0; i < _values.length; i++) {

                let color: string = _values[i].substr(0, 1);

                if (color == "r") {
                    color = "#ff0000";
                }
                if (color == "g") {
                    color = "#00ff00";
                }
                if (color == "b") {
                    color = "#0000ff";
                }
                if (color == "y") {
                    color = "#ffff00";
                }
                if (color == "z") {
                    color = "#000000";
                }

                let value: string = _values[i].substr(1);

                let div: HTMLDivElement = document.createElement("div");
                document.getElementById("Hand").appendChild(div);
                div.setAttribute("class", "inHand");
                div.setAttribute("id", "a" + i);
                document.getElementById("a" + i).innerHTML += value;

                let s: CSSStyleDeclaration = div.style;
                s.backgroundColor = color;

                if (color == "#000000" || color == "#0000ff") {
                    s.color = "white";
                }
            }


        }

        //Nachziehen
        function draw(_cards: number): void {
            if (allCards.length > 0) {
                for (let i: number = 0; i < _cards; i++) {
                    let maxNumber: number = allCards.length;
                    let randomNum: number = getRandom(maxNumber);
                    let card: string = allCards.splice(randomNum, 1)[0];
                    hand.push(card);
                }
            }
        }
        function drawListener(): void {
            //let div: HTMLDivElement = <HTMLDivElement>document.getElementById("Nachzieh");
            document.getElementById("Nachzieh").addEventListener("click", drawEvent);
            document.addEventListener("keydown", space);
        }
        drawListener();
        function drawEvent(): void {
            draw(1);
            setup();
            createCards(hand);
            placeOnPile();
        }

        function space(_event: KeyboardEvent): void {
            var keyCode: number = _event.keyCode;
            if (keyCode == 32) {
                drawEvent();
            }
        }
        //Sortieren
        function sort(): void {
            let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
            button.addEventListener("click", clickSort);
        }
        sort();
        function clickSort(): void {
            hand.sort();
            setup();
            createCards(hand);
            placeOnPile();

        }
        //Ablegen
        function placeOnPile(): void {
            document.getElementById("Hand").addEventListener("click", placeOnPileEvent);
        }
        placeOnPile();
        function placeOnPileEvent(_event: Event): void {
            console.log(_event);
            let handCard: HTMLElement = document.getElementById("Hand");
            let domCard: HTMLElement = <HTMLElement>_event.target;
            if (domCard != handCard) {
                let index: number;
                let domAttribute: string = domCard.getAttribute("id");
                domAttribute = domAttribute.substr(1);
                index = parseInt(domAttribute);
                let card: string = hand.splice(index, 1)[0];
                pile.push(card);
                setup();
                createCards(hand);
                setup2();
                createPile(pile);
                placeOnPile();
            }
        }

        function createPile(_values: string[]): void {

            for (let i: number = 0; i < _values.length; i++) {

                let color: string = _values[i].substr(0, 1);

                if (color == "r") {
                    color = "#ff0000";
                }
                if (color == "g") {
                    color = "#00ff00";
                }
                if (color == "b") {
                    color = "#0000ff";
                }
                if (color == "y") {
                    color = "#ffff00";
                }
                if (color == "z") {
                    color = "#000000";
                }

                let value: string = _values[i].substr(1);

                let div: HTMLDivElement = document.createElement("div");
                document.getElementById("Ablage").appendChild(div);
                div.setAttribute("class", "onPile");
                div.setAttribute("id", "b" + i);
                document.getElementById("b" + i).innerHTML += value;

                let s: CSSStyleDeclaration = div.style;
                s.backgroundColor = color;
                s.zIndex = "0" + i;

                if (color == "#000000" || color == "#0000ff") {
                    s.color = "white";
                }
            }


        }
        //math.random
        function getRandom(_maxNum: number): number {
            return Math.floor(Math.random() * Math.floor(_maxNum));
        }
        //hand leeren
        function setup(): void {
            let node: HTMLElement = document.getElementById("Hand");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "Hand");
            document.getElementsByTagName("body")[0].appendChild(div);

        }
        //ablage leeren
        function setup2(): void {
            let node: HTMLElement = document.getElementById("Ablage");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "Ablage");
            document.getElementsByTagName("body")[0].appendChild(div);

        }
    }

    document.addEventListener("DOMContentLoaded", (main));

}
