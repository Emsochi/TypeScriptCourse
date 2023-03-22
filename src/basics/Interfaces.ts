// określenie struktury danych. określi jakie dane mamy dokladnie przechowywac. robimy je w osobnych plikach. nazwy piszemy z wielkich liter. sam w sobie nie tworzy obiektu

interface Person {
    nameTwo: string;
    ageTwo: number;
    isDeveloper: boolean;
}
function greet(person: Person) {
    console.log('Hello, ${person.name}');
}

//obiekty zbudowane na podstawie np. powyzszego interfejsu musza miec dokladnie takie same nazwy kluczy (nameTwo,ageTwo,isDeveloper) oraz typy danych czyli muszą zainplementowac dokladnie 3 dane informacje. w interfejsie dajemy na koncu przecinki a nie myslniki

//błąd
//const personA: Person = {
   // nameTwo: 'Bartek',
    //ageTwo: 123,
   // isDeveloper: true,
//}

// interfejsy równiez moga zawierac funkcje

interface Person {
    nameTwo: string;
    ageTwo: number;
    isDeveloper: boolean;
    greet(): void
}

//błąd
//const personA: Person = {
   // nameTwo: 'Bartek',
   // ageTwo: 123,
   // isDeveloper: true,
   // greet(){
  //      console.log ('Hello, ${this.nameTwo}');
   // }
//}
