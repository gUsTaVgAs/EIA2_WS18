namespace cocktailbar {

    window.addEventListener("load", starting);

    function starting(_event: Event): void {
        console.log("Start");
        let configurator: HTMLDivElement = <HTMLDivElement>document.querySelector("div#configurator");
        let size: HTMLInputElement = <HTMLInputElement>document.querySelector("input#size");

        configurator.addEventListener("change", whenChange);
        size.addEventListener("input", showprogress);
    }

    
    
    function whenChange(_event: Event): void {

        let formdata: FormData = new FormData(document.forms[0]);
        console.log(formdata);

        let order: HTMLDivElement = <HTMLDivElement>document.getElementById("order");
        order.innerHTML = "";

        for (let entry of formdata) {
            //console.log(entry);
            let product: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            //console.log(product);
            let price: number = Number(product.getAttribute("price"));
            //console.log(price);

            

            if (product.name == "Drink") { 
                price = price * 2;
            }

            order.innerHTML += product.value + "  " + price + " € <br> " ;

        }
        



    }

    function showprogress(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let size: string = (<HTMLInputElement>_event.target).value;

        progress.value = parseFloat(size);

    

    }

    /*let orderelement: HTMLDivElement = <HTMLDivElement>document.getElementById("order");

    orderelement.addEventListener("input", resetinnerhtml);

    function resetinnerhtml(_event: Event):  void {
        let orderelement: HTMLDivElement = <HTMLDivElement>document.getElementById("order");
        orderelement.innerHTML = "reset";
    }*/


}