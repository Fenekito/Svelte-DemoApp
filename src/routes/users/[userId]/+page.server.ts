import type { Actions } from "@sveltejs/kit";
import { error, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({ params }) => {
    const getUser = async () => {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.userId)
            }
        })
        if(!user) {
            throw error(404, "Usuário não encontrado");
        }
        return user;
    }
    return {
        user: getUser(),
    }
}

const actions : Actions = {
    updateUser: async ({ request, params }) => {
		const {email, name} = Object.fromEntries(await request.formData()) as {
			email: string,
			name: string,
		}

		try {
			await prisma.user.update({
				where: {
					id: Number(params.userId)
				},
				data: {
                    email,
					name
				}
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Falha ao atualizar Usuário" })
		}

        return {
            status:200
        }
	},
}