/// <reference path="../typings/main.d.ts" />

import { Destructuring } from "./destructuring";
import { Tester } from "./play";
import * as $ from "jquery";

interface HtmlInjector { (id: string, content: string) : void; }

let destructuring = new Destructuring();
let destOutput = destructuring.getRepresentation();

let play = new Tester();
let playOutput = play.buildNameFun(2, 3, 3);

let injectHtml: HtmlInjector = function(id: string, content: string) {
    document.getElementById(id).innerHTML += content;
};

injectHtml("divOne", `<h1>${destOutput}</h1>`);
injectHtml("divOne", `<h2>${playOutput}</h2>`);

injectHtml("divTwo", "<p>Oh yeah. This is quick</p>");

$("#divThree").html("<h1>to</h1>");
