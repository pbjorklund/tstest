/// <reference path="../typings/main.d.ts" />
"use strict";

import { Destructuring } from "./destructuring";

let assert = require("assert");

describe("", () => {
    let sut: Destructuring;

    beforeEach(function() {
        sut = new Destructuring();
    });

    describe("destructureObject", () => {
        it("should build a new string in format fName - city", () => {
            let result = sut.destructureObject();
            assert.equal(result, "Patrik - Gothenburg");
        });
    });
    describe("destructureArray", () => {
        it("should build a new string in format first second fourth", () => {
            let result = sut.destructureArray();
            assert.equal(result, "1 2 4");
        });
    });
});