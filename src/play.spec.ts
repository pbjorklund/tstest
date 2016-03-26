/// <reference path="../typings/main.d.ts" />
/// <reference path="play.ts" />

'use strict';

import { Tester } from "./play";

let assert = require('assert');

describe('Tester', () => {
    var sut: Tester;

    beforeEach(function() {
        sut = new Tester();
    });

    describe('buildNameFun', () => {
        it('should build a new string in format x y-z-a', () => {
            var result = sut.buildNameFun(2, 3, 3);
            assert.equal(result, "2 3-3");
        });
    });

    describe('funcTypeTest', () => {
        it('should do something cool', () => {
            var result = sut.funcTypeTest(3, 1);
            assert.equal(4, result);
        });
    });
});