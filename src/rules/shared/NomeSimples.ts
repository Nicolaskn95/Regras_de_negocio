export default class completoSimples {
    constructor(
        readonly completo?: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if (min > max)
            throw new Error("tamanho minimo nao pode ser maior que o maximo")
        if (!completo) throw new Error("nome é obrigatorio")
        if (completo.length < min)
            throw new Error(
                `completo deve ter no minimo ${min} e no maximo${max}`
            )

        if (!/^[a-zA-ZÀ-ú0-9 ]+$/.test(completo))
            throw new Error("completo nao pode conter caracteres especiais")
    }

    parcial(qtde: number): string {
        return this.completo?.substring(0, qtde) ?? ""
    }
}
