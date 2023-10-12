import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

type EntityToEnter = {
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
    birth: Date
}

export default class CreateStudent implements UseCase<Student, Student> {
    constructor(readonly repository: RepositoryStudent) { }

    async execute(entity: Student): Promise<Student> {
        const { email } = entity as EntityToEnter

        const userExistent = await this.repository.findByEmail(email)
        if (userExistent) {
            throw new Error("Aluno já existente")
        }

        return this.repository.create(entity)
    }

}