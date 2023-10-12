import Elysia from "elysia";
import CreateStudent from "../../core/student/service/CreateStudent"

type EntityStudent = {
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
    birth: Date
}

export default class CreateStudentController {
    constructor(
        readonly server: Elysia,
        readonly useCase: CreateStudent
    ) { 
        server.get('/student', async ({ body }) => {
            const {name, age, email, phone, address, birth } = body as EntityStudent

            await useCase.execute({name, age, email, phone, address, birth })

            return {
                message: "Aluno criado com sucesso"
            }
        })

    }
}