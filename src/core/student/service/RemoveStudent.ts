import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

export default class RemoveStudent implements UseCase<number, Student> {
    constructor(readonly repository: RepositoryStudent) { }

    async execute(id: number): Promise<Student> {
        const student = await this.repository.findById(id)
        if (!student) {
            throw new Error("Aluno não encontrado")
        }

        return this.repository.remove(await this.repository.findById(id))
    }
}