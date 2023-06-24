import type { Actions } from "@sveltejs/kit"
import { prisma } from '$lib/server/prisma'
import { fail } from "assert";

export const actions: Actions = {
    createUser: async ({ request }) => {
        const {email, name} = Object.fromEntries(await request.formData()) as {
            email:string, 
            name:string
        }
        try {
            await prisma.user.create({
                data: {
                    email,
                    name
                }
            })
        } catch (err) {
            console.error(err);
            fail(500, {message: "Falha ao criar usuário"});
        }
    }, 
}