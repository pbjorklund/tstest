/// <reference path="../typings/main.d.ts" />

import { Destructuring } from "./destructuring";
import { Tester } from "./play";
import * as $ from "jquery";

interface HtmlInjector { (id: string, content: string) : void; }

let destructuring = new Destructuring();
let destOutput = destructuring.destructureObject();

let play = new Tester();
let playOutput = play.buildNameFun(2, 3, 3);

let injectHtml: HtmlInjector = function(id: string, content: string) {
    document.getElementById(id).innerHTML += content;
};

injectHtml("divOne", `
<p>Multiline in string templates is nice</p>
<div>
    <span>"'{ }'"/etc just works in the template</span>
</div>
<h3>Remember to encode the special chars when using string templates</h3>
<ul>
    <li>\\  as \\\\</li>
    <li>\${  as \\\${</li>
    <li>\`  as \\\`</li>
<ul>
`);

function test(strings: string[], ...subs: string[]) {
    const result: string[] = [];

    subs.forEach((sub: string, index: number) => {
        result.push(strings[index], sub.toUpperCase());
        });
    result.push(strings[strings.length - 1]);

    return result.join("");
}

injectHtml("divOne", test`Let's use a string template to uppercase the ${"first var"} which was orignally 'first var'`);

injectHtml("divTwo", `<span>Ouput from function call from imported module: ${playOutput}</span>`);
injectHtml("divTwo", "<br />");
injectHtml("divTwo", `<span>Ouput from function call from imported module: ${destOutput}</span>`);

$("#divThree").html("<h1>And jQuery works with requirejs</h1>");

// A file is considered a module as soon as something is imported to it or exported from it

// import module namespace
// import * as varName from "./moduleName"
// gives varName.varExport())

// import ambient module defined by referenced module.d.ts namespace
// import * as varName from "moduleName"

// import export from module
// import { exportName } from "./modulefile"

// import default export from "./module"
// import ourVarName from "./module"