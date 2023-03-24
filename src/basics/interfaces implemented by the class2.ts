// interfejsy mogą dziedziczyć inne interfejsy

interface Human {
    name: string;
    surname: string;
    age: number;
}
interface HumanWithRole extends Human {
    role: string;
}

interface Human {
    name: string;
    surname: string;
    age: number;
}
interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface HistoryClass {
    history: HistoryEntry[];
}

class User implements Human, HistoryClass {
    name: string;
    surname: string;
    age: number;
    history: HistoryEntry[] = []


constructor (name: string, surname: string, age:number) {
    this.name = name;
    this.surname;
    this.age = age;
}

showHistory(): void {
    console.log(this.history)
}

addHistory(entry): void {
   // this.history = entry;
}
}

const person = new User('Szymon','Mrzyglod', 123);
person.showHistory ();
person.addHistory ({
    createdAt: new Date(),
    event: ' Zalogowano.'
});
person.showHistory ();