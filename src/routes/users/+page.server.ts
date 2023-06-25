import type { PageServerLoad } from "../$types";
import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		users: await prisma.user.findMany(),
	}
}