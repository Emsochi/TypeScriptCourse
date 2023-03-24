// Utwórz klasę Person, która zawiera 4 protected właściwości: name, age, email i phone, oraz gettery i settery dla każdej z nich

   class Person {
    protected _name
    protected _age
    protected _email
    protected _phone


    public get name() {
        return this._name
    }

    public get age() {
        return this._age
    }

    public get email() {
        return this._email
    }
    public get phone(){
        return this._phone
    }

    public set name(val) {
        this._name= val
    }

    public set age(val) {
         this._age= val
    }

    public set email(val) {
         this._email=val
    }
    public set phone(val){
        this._phone= val
    }

}

//Utwórz klasę dziedziczącą z Person o nazwie Student, która rozszerza Person o metodę publiczną EnrollCourse przyjmującą nazwę kursu jako parametr i wyświetlającą informacje o zapisie na kurs (console.log).

class Student extends Person {
    public EnrollCourse (MegaKurs : string)  {
        console.log("Zapisz się na kurs!")
    }
}



//Utwórz 2 interfejsy: Rectangle (zawiera width, height) oraz Cuboid (zawiera width, height, depth).

interface Rectangle{
    width: number
    height: number
}

interface Cuboid extends Rectangle {
depth: number
}

function TypeReturn<T>(type: T) {
    return type
}

//Utwórz generyczną klasę o nazwie ArrayHelper, która zawiera jedną metodę FilterByType<T>(), przyjmującą tablicę dowolnych elementów oraz wartość typu T jako parametry, zwracającą tablicę elementów typu T.




function makeKeysLowercase<T extends object>(obj: T): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
      result[key.toLowerCase()] = value;
    }
    return result;
  }

class ArrayHelper<T> {

    public  FilterByType<T>(array:T[], type : T) : T[] {
       return (array)
    }
   
   }
   

//Utwórz enum o nazwie Color zawierający wartości Red, Blue, Green, Yellow i Purple.

enum Color {
    Red,
    Blue,
    Green,
    Yellow,
    Purple,
}

//Utwórz klasę Car, która zawiera 3 private właściwości: brand, model i year, oraz gettery i settery dla każdej z nich. Następnie utwórz klasę dziedziczącą z Car o nazwie ElectricCar, która rozszerza Car o publiczną właściwość batteryCapacity.

class Car {
    private _brand
    private _model
    private _year
    

    private get brand() {
        return this._brand
    }

    private get model() {
        return this._model
    }

    private get year() {
        return this._year
    }
    
    private set brand(val) {
        this._brand= val
    }

    private set model(val) {
         this._model= val
    }

    private set year(val) {
         this._year=val
    }
   
}

class ElectricCar extends Car {
    public batteryCapacity () {}
        
    
}

//Utwórz 2 interfejsy: Circle (zawiera radius) oraz Sphere (zawiera radius).

interface Circle {
    radius: number
}

interface Sphere {
radius: number
}


//Utwórz generyczną klasę o nazwie KeyValuePair, która zawiera dwie właściwości: key typu K i value typu V. Dodaj metodę toString() zwracającą łańcuch znaków z wartościami key i value.

class KeyValuePair <K,V> {

    key: K
    value: V

    toString() : string {
        return this.key as string + this.value as string
    }

}

//Utwórz enum o nazwie Size zawierający wartości Small, Medium, Large, ExtraLarge.

enum Siza {
    Small,
    Medium,
    Large,
    ExtraLarge,
}

//Utwórz klasę BankAccount, która zawiera 3 protected właściwości: accountNumber, balance i currency, oraz gettery i settery dla każdej z nich. Następnie utwórz klasę dziedziczącą z BankAccount o nazwie SavingsAccount, która rozszerza BankAccount o publiczną metodę addInterest przyjmującą wartość procentową jako parametr i dodającą ją do balance.

class BankAccount {
    protected _accountNumber
    protected _balance
    protected _currency


    public get accountNumber() {
        return this._accountNumber
    }

    public get balance() {
        return this._balance
    }

    public get currency() {
        return this._currency
    }

    public set accountNumber(val) {
        this._accountNumber= val
    }

    public set balance(val) {
         this._balance= val
    }

    public set currency(val) {
         this._currency=val
    }
}

class SavingsAccount extends BankAccount {
    public addInterest (number: number): void {
        this._balance =  this._balance * (1 + number/100)
    }
}

//Utwórz 2 interfejsy: Line (zawiera startPoint, endPoint - obiekty typu 2DPoint) oraz LineSegment (zawiera startPoint, endPoint - obiekty typu 3DPoint).

interface Line {
    startPoint: Point2D;
    endPoint: Point2D;
}

interface LineSegment  {
    startPoint: Point3D
    endPoint: Point3D
}