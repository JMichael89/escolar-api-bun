import { PrismaClient } from "@prisma/client";
import Student from "../../core/student/model/Student";
import RepositoryStudent from "../../core/student/service/RepositoryStudent";

export default class RepositoryStudentPrisma implements RepositoryStudent {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    remove(entity: Student): Promise<Student> {
        return this.prisma.student.delete({
            where: {
                id: entity.id
            }
        })
    }

    findById(id: number): Promise<Student> {
        return this.prisma.student.findUnique({
            where: {
                id: id
            }
        })
    }

    findByName(name: string): Promise<Student> {
        return this.prisma.student.findMany({
            where: {
                name: name
            }
        })
    }

    findByEmail(email: string): Promise<Student> {
        return this.prisma.student.findMany({
            where: {
                email: email
            }
        })
    }

    findAll(): Promise<Student[]> {
        return this.prisma.student.findMany()
    }

    async create(student: Student): Promise<Student> {
        return await this.prisma.student.create({
            data: student
        })
    }
}