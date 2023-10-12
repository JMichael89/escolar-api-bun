import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

export default class FindStudentByEmail implements UseCase<string, Student> {
    constructor(readonly repository: RepositoryStudent) { }

    async execute(email: string): Promise<Student> {
        return this.repository.findByEmail(email)
    }
}