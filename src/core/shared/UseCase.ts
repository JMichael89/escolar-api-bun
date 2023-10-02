export default interface UseCase<E, S> {
    execute(entity: E): Promise<S>;
}