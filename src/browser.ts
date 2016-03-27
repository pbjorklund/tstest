import { Destructuring } from "./destructuring";
import { Tester } from "./play";

let destructuring = new Destructuring();
let destOutput = destructuring.getRepresentation();

let play = new Tester();
let playOutput = play.buildNameFun(2, 3, 3);

let injectHtml = function(id: string, content: string) {
    document.getElementById(`#${id}`).innerHTML += content;
}

injectHtml("divOne", `<h1>${destOutput}</h1>`);
injectHtml("divOne", `<h2>${playOutput}</h2>`);
