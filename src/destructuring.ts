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
    public getRepresentation = function() {
        const { firstName: fName, place: { city } } = person;
        return `${fName} - ${city}`;
    };
}
