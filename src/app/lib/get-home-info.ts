import {query} from '@lib/strapi'

export  async function getHomeInfo() {
	const {data} = await query('home')

	return data
}