// klasa jako iterface

class Human {
    name: string;
    surname: string;

    constructor (name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

function greet (person: Human) {
    console.log(person.name)
}