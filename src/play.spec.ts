/// <reference path="../typings/main.d.ts" />
"use strict";

import { Tester, Locale } from "./play";

let assert = require("assert");

describe("Tester", () => {
    let sut: Tester;

    beforeEach(function() {
        sut = new Tester();
    });

    describe("buildNameFun", () => {
        it("should build a new string in format x y-z-a", () => {
            let result = sut.buildNameFun(2, 3, 3);
            assert.equal(result, "2 3-3");
        });
    });

    describe("funcTypeTest", () => {
        it("should do something cool", () => {
            let result = sut.funcTypeTest(3, 1);
            assert.equal(4, result);
        });
    });

    describe("enums", () => {
        it("is interchangable with number", () => {
            let result: number = sut.enumTakingFunc(Locale.AfrikaansSouthAfrica);
            assert.equal(result, Locale.Finglish);
            assert.equal(1337, Locale.Finglish);
        });
    });
});