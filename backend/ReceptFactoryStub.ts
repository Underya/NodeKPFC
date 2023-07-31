class Recept {
    Name: string;
    Kcal: number;
 
    constructor(name: string, kcal: number) {
        this.Name = name;
        this.Kcal = kcal;
    }
}

class ReceptFactoryStub {

    GetRecepts() : Recept[] {
        return [
            new Recept("A", 1),
            new Recept("B", 2),
        ];
    }

}

export {Recept, ReceptFactoryStub };