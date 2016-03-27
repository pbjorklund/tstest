import { Destructuring } from "./destructuring";
import { Tester } from "./play";

let destructuring = new Destructuring();
let destOutput = destructuring.getRepresentation();

let play = new Tester();
let playOutput = play.buildNameFun(2, 3, 3);

document.getElementById("#divOne").innerHTML += `<h1>${destOutput}</h1>`;
document.getElementById("#divOne").innerHTML += `<h1>${playOutput}</h1>`;
