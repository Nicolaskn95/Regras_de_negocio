import CasosDeUso from "../../shared/CasosDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "./RepositorioCurso"

export default class SalvarCurso implements CasosDeUso<Curso, void> {
    constructor(private repo: RepositorioCurso) {}

    async executar(curso: Curso): Promise<void> {
        // interagir com o banco de dados
        await this.repo.salvar(curso)
    }
}
