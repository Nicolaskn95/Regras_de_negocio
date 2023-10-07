export default interface CasosDeUso<E, S> {
    executar(entrada: E): Promise<S>
}
