import type { Actions } from "@sveltejs/kit"
import { prisma } from '$lib/server/prisma'
import { fail } from "assert";

export const actions: Actions = {
    createUser: async ({ request }) => {
        const {email, name, password} = Object.fromEntries(await request.formData()) as {
            email:string, 
            name:string,
            password:string
        }
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })
            
            if(user) {
                return {
                    status: 409,
                    message: "Email Já Existe"
                }
            }
            else {
                await prisma.user.create({
                    data: {
                        email,
                        name,
                        password
                    }
                })
            }
        } catch (err) {
            console.error(err);
            fail(500, "Erro ao criar usuário")
        }
        
        return {
            status: 201,
            message: "Usuário Criado Com Sucesso"
        }
    },
}