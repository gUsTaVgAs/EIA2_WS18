var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceHolder = 0;
    let priceBalls = 0;
    let priceLametta = 0;
    let priceCandle = 0;
    let priceShipping = 0;
    let numberOfBalls = 0;
    let numberOfLametta = 0;
    let numberOfCandle = 0;
    let adress = "";
    function fillFieldset() {
        console.log("lul");
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //B�ume
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < A4.treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + i + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro'>" + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Halterung
        childNodeHTML += "<h3>Halterung</h3>";
        for (let i = 0; i < A4.holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + A4.holder[i].name + " " + A4.holder[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + A4.holder[i].name + " " + A4.holder[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Glaskugeln
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (let i = 0; i < A4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro'>" + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (let i = 0; i < 51; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (let i = 0; i < A4.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro'>" + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Laenge in Meter</h3>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (let i = 0; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < A4.candleTyp.length; i++) {
            childNodeHTML += "<option value='" + i + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro'>" + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (let i = 0; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i = 0; i < A4.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + A4.shipment[i].name + " " + A4.shipment[i].price + " Euro'>" + A4.shipment[i].name + " " + A4.shipment[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        //trees
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = A4.treeSpecies[priceIndex].price;
            //console.log(priceTree);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //halterung
        if (target.name == "Radiogroup") {
            let node = document.getElementById("holder");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceHolder = A4.holder[priceIndex].price;
            console.log(priceHolder);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "kugeln") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls = A4.christmasBall[priceIndex].price;
            console.log(priceBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge1") {
            let node = document.getElementById("ballMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta
        if (target.id == "lametten") {
            let node = document.getElementById("lametta");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta = A4.lametta[priceIndex].price;
            console.log(priceLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge2") {
            let node = document.getElementById("lamettaMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Kerzen
        if (target.id == "candles") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = A4.candleTyp[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge3") {
            let node = document.getElementById("candleMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            let node = document.getElementById("shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceShipping = A4.shipment[priceIndex].price;
            console.log(priceShipping);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adresse
        if (target.id == "ad") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("price");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceHolder == 0 || priceBalls == 0 || priceLametta == 0 || priceCandle == 0 || priceShipping == 0 || numberOfBalls == 0 || numberOfLametta == 0 || numberOfCandle == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=a4.js.map