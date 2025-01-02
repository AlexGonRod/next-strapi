import { query } from "./strapi";

export async function getDetails(slug: string) {
	const { data } = await query(`articles/${slug}?populate[cover][fields][0]=url`)
	
	return data
}