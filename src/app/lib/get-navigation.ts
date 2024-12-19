import { query } from "@lib/strapi";

export async function getNavigation() {
	const {data} = await query('nav')
	const { items, collections, new: New, gifts, outlet} = data
	return {items, collections, New, gifts, outlet}
}