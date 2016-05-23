// Interface and class
export interface Printer {
    print(text: string): string;
}

export class Logger implements Printer {
    // Need to make it public to work in examples above.
    // I would like to keep it private but then compiler complains

    constructor(public logFunction = (text: string) => { return text; } ) { }

    public print(text: string): string {
        return this.internalPrintFunction(text);
    }

    private internalPrintFunction(text: string) {
        return this.logFunction(this.replaceDotsWithSpaces(text));
    }

    private replaceDotsWithSpaces(text: string): string {
        return text.replace(".", " ");
    }
}

// Interfacing

export interface DoublePrinter extends Printer {
    printAgain(text: string): void;
}

export class DevNullish implements DoublePrinter {
    public printAgain(text: string) { return text; }

    public print(text: string) { return text; }
}

/* Transpiles to

var DevNullish = (function () {
    function DevNullish() {
    }
    DevNullish.prototype.printAgain = function (text) { return text; };
    DevNullish.prototype.print = function (text) { return text; };
    return DevNullish;
}());
exports.DevNullish = DevNullish)

*/

// Classy

// Normal class extension, works as expected
export class InstancePrinter extends Logger {
    private printAgain(text: string) {
        this.print(text);
    };
}

/* Transpiles to

var InstancePrinter = (function (_super) {
    __extends(InstancePrinter, _super);
    function InstancePrinter() {
        _super.apply(this, arguments);
    }
    InstancePrinter.prototype.printAgain = function (text) {
        this.print(text);
    };
    ;
    return InstancePrinter;
}(Logger));
exports.InstancePrinter = InstancePrinter)

*/

export interface InstancePrinterInterface extends Logger {
    printAgain(text: string): void;
}

// src\interClass.ts(82,14): error TS2420: Class 'InstancePrinterExtendsClass' incorrectly implements interface 'Logger'.
// Property 'internalPrintFunction' is missing in type 'InstancePrinterExtendsClass'.
export class InstancePrinterExtendsClass implements Logger {
    public logFunction: any;
    public printAgain(text: string) { };
    public print(text: string): string {
        return text;
    };
}

// src\interClass.ts(92,14): error TS2420: Class 'Logger2' incorrectly implements interface 'InstancePrinterInterface'.
// Types have separate declarations of a private property 'internalPrintFunction'.
export class Logger2 implements InstancePrinterInterface {
    public logFunction: any;
    public printAgain(text: string) { return text; }
    public print(text: string) { return text; };
    // This is valid in vscode, but gives compiler errors...
    private internalPrintFunction() { };
}
