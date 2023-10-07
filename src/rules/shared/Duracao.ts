export default class Duracao {
    constructor(readonly emSegundos: number) {
        if (!emSegundos) throw new Error("Duracao é obrigatoria")
        if (emSegundos <= 0)
            throw new Error("Duracao tera que ser maior que zero")
    }

    get emHorasEmMinutos(): string {
        const horas = Math.floor(this.emSegundos / 3600)
        const minutos = Math.floor(this.emSegundos - horas * 3600)
        return `${horas}h ${minutos}m`
    }
}
