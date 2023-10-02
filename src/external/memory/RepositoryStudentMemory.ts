import Student from "../../core/student/model/Student";
import RepositoryStudent from "../../core/student/service/RepositoryStudent";

export default class repositoryStudentMemory implements RepositoryStudent {
    private students: Student[] = []

    async save(entity: Student): Promise<Student> {
        this.students.push(entity)
        return entity
    }

    async remove(entity: Student): Promise<Student> {
        return this.students.filter(student => student.id!== entity.id)
    }

    async findById(id: number): Promise<Student> {
        return this.students.find(student => student.id === id)
    }

    async findByName(name: string): Promise<Student> {
        return this.students.find(student => student.name === name)
    }

    async findByEmail(email: string): Promise<Student> {
        return this.students.find(student => student.email === email)
    }

    async findAll(): Promise<Student[]> {
        return this.students
    }
}