import Student from "../model/Student";

export default interface RepositoryStudent {
    create(entity: Student): Promise<Student>;
    remove(entity: Student): Promise<Student>;
    findById(id: number): Promise<Student>;
    findByName(name: string): Promise<Student>;
    findByEmail(email: string): Promise<Student>;
    findAll(): Promise<Student[]>;
}