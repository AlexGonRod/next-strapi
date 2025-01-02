import { query } from "./strapi";
const {STRAPI_HOST} = process.env

export async function getCategories() {
	const { data } = await query("product-categories?populate[image][fields]=url&populate[image][fields]=name")
	return data.map(({ image: rawImage, name, slug, description }) => {
		const image = `${STRAPI_HOST}${rawImage.url}`

		return {image, name, slug, description}
	})
}