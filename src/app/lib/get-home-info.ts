import { query } from '@lib/strapi'
const {STRAPI_HOST} = process.env

export  async function getHomeInfo() {
	const { data } = await query('home?populate[HeroImage][fields]=url&populate[HeroImage][fields]=name')
	const { Title, Description, HeroImage } = data;
	const image = `${STRAPI_HOST}${HeroImage.url}`
	return {Title, Description, image}
}