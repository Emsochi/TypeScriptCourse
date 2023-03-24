interface Human {
    name: string;
    surname: string;
    age: number;
}
class Person3 implements Human {
name: string;
surname: string = '';
age: number;

constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    }
}

//Wazne jest, ze mozemy implementowac wiele interfejsow

interface Human {
    name: string;
    surname: string;
    age: number;
}

class Person4 implements Human, HistoryClass {
    name: string;
    surname: string;
    age: number;
    history:  HistoryEntry[];
    showHistory(): void {
        console.log(this.history);
    }
    constructor(name: string, age: number,) {
        this.name = name;
        this.age;
    }
}