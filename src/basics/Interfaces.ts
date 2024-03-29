// określenie struktury danych. określi jakie dane mamy dokladnie przechowywac. robimy je w osobnych plikach. nazwy piszemy z wielkich liter. sam w sobie nie tworzy obiekt



interface Person2 {
    nameTwo: string;
    ageTwo: number;
    isDeveloper: boolean;
}
export function greet(person: Person2) {
    console.log('Hello, ${person.name}');
}

//obiekty zbudowane na podstawie np. powyzszego interfejsu musza miec dokladnie takie same nazwy kluczy (nameTwo,ageTwo,isDeveloper) oraz typy danych czyli muszą zainplementowac dokladnie 3 dane informacje. w interfejsie dajemy na koncu przecinki a nie myslniki


const personA: Person2 = {
   nameTwo: 'Bartek',
    ageTwo: 123,
   isDeveloper: true,
}

// interfejsy równiez moga zawierac funkcje

interface Person {
    nameTwo: string;
    ageTwo: number;
    isDeveloper: boolean;
    greet(): void
}


const person: Person = {
   nameTwo: 'Bartek',
   ageTwo: 123,
   isDeveloper: true,
   greet(){
       console.log ('Hello, ${this.nameTwo}');
   }
}

//Mamy równiez mozliwosc wskazania danych, ktore moga byc ale nie musza (nie ma obowiazku implementacji). uzywamy wtedy w kluczu znaku zapytania:

// interface Person3 {
//     name2: string,
//     age2: number,
//     isdeveloper: boolean;
//     achievements?: string [];
//     greet(): void;
// }
// blad
// const personA: Person = {
//    name2: 'Bartek',
//    age2: 123,
//    isdeveloper:true,
//    greet(){
//        console.log('Hello, ${this.name2');

//    },
//    achievements: ['Osiagniecie']
// };
// const personB: Person = {
//    name2: 'Kuba',
//    age2: 123,
//    isDeveloper: true,
//   greet() {
//        console.log('Hello, ${this.name2');
//    }
// };


