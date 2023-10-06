import NomeSimples from "../../shared/NomeSimples"

export interface CursoProps {
    nome?: string
}

export default class Curso {
    readonly nome: NomeSimples

    constructor(props: CursoProps) {
        this.nome = new NomeSimples(props.nome!)
    }
}
