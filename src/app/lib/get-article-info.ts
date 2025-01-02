import { query } from "./strapi";

export async function getArticle() {
	const {data} = await query('articles?populate[cover][fields][0]=url')
	return data
}