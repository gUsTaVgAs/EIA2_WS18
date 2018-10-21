namespace A2 {
    function main() {

        interface Karten {

            name: string;
            rot: number;
            blau: number;
            gruen: number;
            gelb: number;
        }

        let k0: Karten = {
            name: "0",
            rot: 1,
            blau: 1,
            gruen: 1,
            gelb: 1,
        }

        let k1: Karten = {
            name: "1",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k2: Karten = {
            name: "2",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k3: Karten = {
            name: "3",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k4: Karten = {
            name: "4",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k5: Karten = {
            name: "5",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k6: Karten = {
            name: "6",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k7: Karten = {
            name: "7",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k8: Karten = {
            name: "8",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let k9: Karten = {
            name: "9",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let kPluss2: Karten = {
            name: "+2",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let kAussetzen: Karten = {
            name: "Aussetzen",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let kReverse: Karten = {
            name: "Reverse",
            rot: 2,
            blau: 2,
            gruen: 2,
            gelb: 2,
        }

        let array: Karten[] = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kPluss2, kAussetzen, kReverse];

        let s1: number = 4;

        let s2: number = 4;

        let c: string = "";
// zufällige Zahlen wird generiert
        function getRandom(n: number) {
            return Math.floor(Math.random() * Math.floor(n));

        }
        // Darstellung der Karten
        function placeDiv(_color: string, _n: string, _x: number): void {

            //console.log(_color, _n, _x)


            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _x)
            document.getElementById("a" + _x).innerHTML += _n;

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 130 + "px";
            s.height = 200 + "px";
            s.left = (_x + 0.5) * 140 + "px";
            s.bottom = 40 + "px";
            s.borderRadius = 10+ "px";


            if (c == "#000000") {
                s.color = "white";
            }
            if (c == "#0000ff") {
                s.color = "white";
            }
        }
        //prompt
        let z: number;
        let i: string = prompt("Wie viele Karten willst du?");
        z = Number(i);
        //Karten werte mit Random generiert 
        for (let d: number = 0; d < z; d++) {
            let l = getRandom(15);


            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {

                    c = "#000000"
                    s2--;
                    placeDiv(c, "Farbwahl", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let m: number = getRandom(4);
                    switch (m) {
                        case 0:
                            c = "#ff0000"
                            if (array[l].rot > 0) {
                                placeDiv(c, array[l].name, d);
                                array[l].rot--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00"
                            if (array[l].gruen > 0) {
                                placeDiv(c, array[l].name, d);
                                array[l].gruen--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff"
                            if (array[l].blau > 0) {
                                placeDiv(c, array[l].name, d);
                                array[l].blau--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00"
                            if (array[l].gelb > 0) {
                                placeDiv(c, array[l].name, d);
                                array[l].gelb--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }

                    }



                }


            }
        }
        //Kartenstapel
        function Stapel(_n: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#8A4B08";
            s.width = 130 + "px";
            s.height = 200 + "px";
            s.left = (_n + 5) * 5 + "px";
            s.top = 15 + "px";
            s.borderRadius = 10+ "px";
        }
        //Ablagestapel
        function Ablage(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage")

            document.getElementById("Ablage").innerHTML += "Ablage";

            let s: CSSStyleDeclaration = div.style;
            s.textAlign = "center";
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#298A08";
            s.width = 130 + "px";
            s.height = 200 + "px";
            s.right = 20 + "px";
            s.top = 15 + "px";
            s.color= "#F2F2F2"
        }

        for (let i: number = 0; i < (107 - z); i++) {
            Stapel(i);
        }

        Ablage();
    }
    document.addEventListener("DOMContentLoaded", (main));
}