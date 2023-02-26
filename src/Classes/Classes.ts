class Person {
    private name; // Dostępne jedynie wewnątrz klasy
    protected age; // Dostępne jedynie wewnątrz klasy + Dla klas dziedziczących
    public var1; // Dostępne wszędzie;
} 


class Player {
    private _health = 100; // ustawienie prywatne wewnatrz klasy

    public get health() {    // zwracana nam prywatną właściwość
        return this._health;
    }

    public set health(num: number) {  //definiujemy sposób ustawienia prywatnej właściwości
        this._health = num;
        if (this._health < 0) {
            console.log("Player is dead");
        }
    }

    public takeDamge(dmg : number) {  // zwykła funkcja, typ void
        this._health -= dmg;
        console.log("Damage taken");
    }
}

let player1: Player = new Player()

player1.health = 8

