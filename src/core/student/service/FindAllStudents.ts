import UseCase from "../../shared/UseCase";
import Student from "../model/Student";
import RepositoryStudent from "./RepositoryStudent";

export default class FindAllStudents implements UseCase<void, Student[]> {
    constructor(readonly repository: RepositoryStudent) { }

    async execute(): Promise<Student[]> {
        return this.repository.findAll()
    }
}