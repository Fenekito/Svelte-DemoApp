import type { PageServerLoad } from "../$types";
import { prisma } from "$lib/server/prisma";
import type { Actions } from "@sveltejs/kit";
import { fail } from "assert";

export const load: PageServerLoad = async () => {
	return {
		users: await prisma.user.findMany(),
	}
}

export const actions: Actions = {
	deleteUser: async ({ url }) => {
		const id = url.searchParams.get("id")
		if(!id) {
			return fail(400, {message: "invalid request"})
		}

		try {
			await prisma.user.delete({
				where: {
					id: Number(id)
				}
			})
		} catch (err) {
			console.error(err);
			fail (500, {message: "Falha ao deletar usuário"});
		}
	}
}