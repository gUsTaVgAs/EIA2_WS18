"use strict";
var cocktailbar;
(function (cocktailbar) {
    window.addEventListener("load", starting);
    function starting(_event) {
        console.log("Start");
        let configurator = document.querySelector("div#configurator");
        let size = document.querySelector("input#size");
        configurator.addEventListener("change", whenChange);
        size.addEventListener("input", showprogress);
    }
    function whenChange(_event) {
        let formdata = new FormData(document.forms[0]);
        console.log(formdata);
        let order = document.getElementById("order");
        order.innerHTML = "";
        for (let entry of formdata) {
            //console.log(entry);
            let product = document.querySelector("[value='" + entry[1] + "']");
            //console.log(product);
            let price = Number(product.getAttribute("price"));
            //console.log(price);
            if (product.name == "Drink") {
                price = price * 2;
            }
            order.innerHTML += product.value + "  " + price + " € <br> ";
        }
    }
    function showprogress(_event) {
        let progress = document.querySelector("progress");
        let size = _event.target.value;
        progress.value = parseFloat(size);
    }
    /*let orderelement: HTMLDivElement = <HTMLDivElement>document.getElementById("order");

    orderelement.addEventListener("input", resetinnerhtml);

    function resetinnerhtml(_event: Event):  void {
        let orderelement: HTMLDivElement = <HTMLDivElement>document.getElementById("order");
        orderelement.innerHTML = "reset";
    }*/
})(cocktailbar || (cocktailbar = {}));
//# sourceMappingURL=cocktail1.js.map