import Curso from "./curso/model/Curso"

const curso = new Curso({ nome: "Curso de Typescrypt" })

console.log(curso.nome.completo)
