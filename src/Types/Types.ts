//zmienne + typy danych

let firstName : string = "Name";
let lastName = "Name";
let lastName2: number = 2;
let bool :boolean = true;

// tablice
let array1 : string[] = []
let array2: Array<string> = []


// rzutowanie typów, zmiana z jednego na drugi
let unknown : unknown= "string";
console.log(unknown as string)
console.log(<string>unknown)

// readonly, const
let cantChange : readonly string[] 




const cantChangeNormal : string = "";

// tylko do odczytu.. tablica, która przyjmuje tylko te dane podane w tablicy
let ourTuple : [number, boolean, string]
ourTuple = [1, true, ""]






