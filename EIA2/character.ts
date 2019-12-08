namespace charactereditor {

window.addEventListener("load", afterload);

function afterload(_event: Event): void {

    let editor: HTMLDivElement = <HTMLDivElement>document.querySelector("div#editor");

    editor.addEventListener("change", whenchange);


}


function whenchange(_event: Event): void   {
    let formdata: FormData = new FormData(document.forms[0]);
    console.log(formdata);

    let output: HTMLDivElement = <HTMLDivElement>document.getElementById("output");
    output.innerHTML = "";

    for (let entry of formdata) {
        let choice: HTMLInputElement  = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");

        output.innerHTML += choice.value + " <br>" ;
    }


}





}