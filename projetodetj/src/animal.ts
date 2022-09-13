export abstract class Animal {
    nome: String
    idade : number

    constructor(nome: String, idade: number) {

        this.nome = nome

        this.idade = idade   
    }

    abstract som(): void
    abstract andar(): void
    
}