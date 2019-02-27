import { Aluno } from "./Aluno";
import { Livro } from "./Livro";

export class Aluguel{
    constructor(id?: number, 
                aluno?: Aluno, 
                livro?: Livro, 
                dataAluguel?: Date, 
                dataEntrega?: Date) {}
}