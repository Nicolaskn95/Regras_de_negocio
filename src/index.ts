import Curso from "./rules/curso/model/Curso"
import ConsultarCursos from "./rules/curso/service/ConsultarCursos"
import SalvarCurso from "./rules/curso/service/SalvarCurso"
import RepositorioCursoMemoria from "./external/db/RepositorioCursoMemoria"
import RepositorioCursoPrisma from "./external/db/RepositorioCursoPrisma"

const curso = new Curso({
    nome: "Linguagem de programação Swift",
    duracao: 8000,
})

const repo = new RepositorioCursoPrisma()

await new SalvarCurso(repo).executar(curso)
console.log("curso salvo com sucesso")

const cursos = await new ConsultarCursos(repo).executar()
cursos.forEach((curso) => console.log(curso.nome.completo))
