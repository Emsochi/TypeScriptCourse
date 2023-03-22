//boolean
//number
//string
//null
//array, skórony zapis np. string[] lub (number|string)[] lub Array <string | number>

const namesArray: Array <string> = [];
//typy generyczne

//nie mozemy uzyć boolean w tablicy stringów np.
//namesArray.push(true)

//tablica dwu elementowa z dokładnie takimi typami danych
let tupleExample: [number, string] = [2, 'a']

//tumple- tablica z określoną ilością i typem danych elementów np. useState()

//enum- kolekcja, mozemy wypisać jakieś rzeczy. Nazwa musi być wielką literą
enum UserTypes {
    Admin,
    Moderator,
    User,
    Banned,
}
let myAccess: UserTypes = UserTypes.User;

enum UserRole {
    Admin,
    User,
    BannedUser,
}

const bartek = UserRole.Admin

//unknow gdy nie jesteśmy pewni typu, który przyjdzie np z api

let unknownExapl:  unknown = true;

//any- cokolwiek, nie uywamy
// void- w funckach oznacza, ze ona nic nie zwraca
//never- przy wyrzucaniu wyjątku, ona nie dotyczy funkcji

//mozna tez pisac swoje typy np.
const foobar: 'Biały'|'Czerwony'|'Zielony' = 'Biały';

//JSON po parsowaniu stanie się 'number'
const json = '123';
const data = JSON.parse(json);
console.log(data, typeof data);