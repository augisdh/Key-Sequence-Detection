"use strict";

const wrongText = document.querySelector(".wrong-text");
const keyFind = "cornify";
const keyPressed = [];

window.addEventListener("keyup", (event) => {
    keyPressed.push(event.key);
    keyPressed.splice(-keyFind.length -1, keyPressed.length - keyFind.length);

    (keyPressed.join('').toLowerCase(keyPressed).includes(keyFind)) ? (cornify_add(), wrongText.innerHTML = "") : wrongText.innerHTML = "WRONG SECRET CODE";
});