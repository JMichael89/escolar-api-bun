import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

export default class FindStudentById implements UseCase<number, Student>{

    constructor(readonly repository: RepositoryStudent) { }

    async execute(id: number): Promise<Student> {
        return this.repository.findById(id)
    }
}