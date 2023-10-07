import CasosDeUso from "../../shared/CasosDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "./RepositorioCurso"

export default class ConsultarCursos implements CasosDeUso<void, Curso[]> {
    constructor(private repo: RepositorioCurso) {}

    async executar(): Promise<Curso[]> {
        return await this.repo.buscarTodos()
    }
}
