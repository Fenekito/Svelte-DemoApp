import type { Actions } from "@sveltejs/kit"
import { prisma } from '$lib/server/prisma'
import { fail } from "assert";
import { Console } from "console";

export const actions: Actions = {
    createUser: async ({ request }) => {
        const {email, name} = Object.fromEntries(await request.formData()) as {
            email:string, 
            name:string
        }
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })
            
            if(user) {
                return {
                    message: "Email Já Existe"
                }
            }
            else {
                await prisma.user.create({
                    data: {
                        email,
                        name
                    }
                })
            }
        } catch (err) {
            console.error(err);
            fail(500, "Erro ao criar usuário")
        }
        
        return {
            status: 201
        }
    },
}