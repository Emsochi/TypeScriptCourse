


import { doStuff } from "../Functions/Functions"

// Utwórz klasę Employee, która zawiera 3 protected właściwości oraz gettery dla nich oraz settery dla nich
class EmployeeClass {
    protected _name
    protected _age
    protected _phone


    public get name() {
        return this._name
    }

    public get age() {
        return this._age
    }

    public get phone() {
        return this._phone
    }

    public set name(val) {
        this._name = val
    }

    public set age(val) {
        this._age = val
    }

    public set phone(val) {
        this._phone = val
    }

}

// Utwórz klasę dziedziczącą z Employee, która nazywa się EmployeeChild i rozszerza Employee o metodę publiczną GetFired (console.log("i am fired")


class EmployeeChild extends EmployeeClass {
    public getFired() {
        console.log("I am fired")
    }
}


// Utwórz 2 Interfejsy, jeden o nazwie 2DPoint (zawiera x, y) jeden o nazwie 3DPoint (x,y,z)

interface Point2D {
    x: number
    y: number
}

interface Point3D extends Point2D {
z: number
}


function TypeReturn<T>(type: T) {
    return type
}

// Utwórz enum zawierający Up, Down, Left, Right o nazwie Directions

enum Directions {
    Up,
    Down,
    Left,
    Right
}


type TrafficLightColor = 'Red' | 'Yellow' | 'Green'

class Circle {
    static pi : number = 3.14

    static calculateArea(radius: number) {
        return radius*radius* Circle.pi
    }
}

Circle.pi

Circle.calculateArea(5)

doStuff()

