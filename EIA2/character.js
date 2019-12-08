"use strict";
var charactereditor;
(function (charactereditor) {
    window.addEventListener("load", afterload);
    function afterload(_event) {
        let editor = document.querySelector("div#editor");
        editor.addEventListener("change", whenchange);
    }
    function whenchange(_event) {
        let formdata = new FormData(document.forms[0]);
        console.log(formdata);
        let output = document.getElementById("output");
        output.innerHTML = "";
        for (let entry of formdata) {
            let choice = document.querySelector("[value='" + entry[1] + "']");
            output.innerHTML += choice.value + " <br>";
        }
    }
})(charactereditor || (charactereditor = {}));
//# sourceMappingURL=character.js.map