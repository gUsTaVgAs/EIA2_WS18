var A2new;
(function (A2new) {
    let allCards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA", "r+2", "r+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA", "g+2", "g+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA", "b+2", "b+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA", "y+2", "y+2",
        "s+4", "s+4", "s+4", "s+4", "sWahl", "sWahl", "sWahl", "sWahl"];
    function getRandom(_maxNum) {
        return Math.floor(Math.random() * Math.floor(_maxNum));
    }
    function main() {
        let handCards = parseInt(prompt("Wie viele Karten willst du? (max 10)"));
        if (handCards > 10) {
            handCards = 10;
        }
        for (let i = 0; i < handCards; i++) {
            let maxNumber = allCards.length;
            let randomNum = getRandom(maxNumber);
            let color = allCards[randomNum].substr(0, 1);
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
            if (color == "s") {
                color = "#000000";
            }
            let value = allCards[randomNum].substr(1);
            createCards(color, value, i);
            allCards.splice(randomNum, 1);
        }
        function createCards(_color, _n, _i) {
            let div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.setAttribute("id", "a" + _i);
            document.getElementById("a" + _i).innerHTML += _n;
            let s = div.style;
            s.backgroundColor = _color;
            if (_color == "#000000" || _color == "#0000ff") {
                s.color = "white";
            }
        }
    }
    document.addEventListener("DOMContentLoaded", (main));
})(A2new || (A2new = {}));
//# sourceMappingURL=a2new.js.map