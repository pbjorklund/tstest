/// <reference path="../typings/main.d.ts" />
"use strict";

import { Destructuring } from "./destructuring";

let assert = require("assert");

describe("", () => {
    let sut: Destructuring;

    beforeEach(function() {
        sut = new Destructuring();
    });

    describe("getRepresentation", () => {
        it("should build a new string in format fName - city", () => {
            let result = sut.getRepresentation();
            assert.equal(result, "Patrik - Gothenburg");
        });
    });
});