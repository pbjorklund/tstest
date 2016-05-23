/// <reference path="../typings/main.d.ts" />
"use strict";

import { Logger, DevNullish, InstancePrinter, InstancePrinterExtendsClass } from "./interClass";

let assert = require("assert");

describe("Tester", () => {

    describe("Logger", () => {
        it("should log by returning a formatted string", () => {
            let sut: any = new Logger();
            assert.equal("aloha hey", sut.print("aloha.hey"));
            assert.equal(typeof sut.internalPrintFunction, 'function');
        });
    });
    describe("DevNullish", () => {
        it("should log by returning the same string", () => {
            let sut: any = new DevNullish();
            assert.equal("aloha.hey", sut.print("aloha.hey"));
            assert.equal(typeof sut.internalPrintFunction, 'undefined');
        });
    });
    describe("InstancePrinter", () => {
        it("should log by returning a formatted string", () => {
            let sut: any = new InstancePrinter();
            assert.equal("aloha hey", sut.print("aloha.hey"));
            assert.equal(typeof sut.internalPrintFunction, 'function');
        });
    });
});