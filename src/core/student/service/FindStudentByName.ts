import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

export default class FindStudentByName implements UseCase<string, Student>{
    constructor(readonly repository: RepositoryStudent) { }

    async execute(name: string): Promise<Student> {
        return this.repository.findByName(name)
    }
}
