interface Location {
    city: string;
    country: string;
}

interface Person {
    firstName: string;
    lastName: string;
    place: Location;
}

let person: Person = {
    firstName: "Patrik",
    lastName: "Bjorklund",
    place: {
        city: "Gothenburg",
        country: "Sweden"
    }
};

export class Destructuring {
    public destructureObject = function() {
        const { firstName: fName, place: { city } } = person;
        return `${fName} - ${city}`;
    };

    public destructureArray: () => string = function() {
        let array = [1, 2, 3, 4, 5, 6];
        const [first, second, ...rest] = array;
        return `${first} ${second} ${rest[1]}`;
    }
}
