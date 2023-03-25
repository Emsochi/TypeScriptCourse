// oznaczenie pola jako readonly spowoduje, ze nie mozemy jej nowej wartosci

class Human10 {
    constructor(
        public readonly name: string,
        public readonly surname: string,
    ) {}
}

const bartek10 = new Human ('Bartek', 'B');
bartek10.name = 'Krzysztof' // nie mozemy przypisac nowej wartości