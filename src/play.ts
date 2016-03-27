interface Additioner { (firstNum: number, secondNum: number): number; }
interface StringBuilder { (fname: number, ...rest: number[]): string; }
interface GenericIdentityFunc<T> { (a: T): T; }

export class Tester {
    buildNameFun: StringBuilder = (firstName: number, ...restOfName: number[]) => {
        return firstName + " " + restOfName.join("-");
    };

    funcTypeTest(x: number, y: number) {

        let additioner: Additioner =
            function(z: number, a: number): number {
                return z + a;
            };

        let func = function(
            num1: number,
            num2: number,
            cb: (param1: number, param2: number) => number
        ) {
            return cb(num1, num2);
        };

        return func(x, y, additioner);
    }
}
