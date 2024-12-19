import { query } from '@lib/strapi'

export async function getMetadata() {
	const {data} = await query('global')

	return  data
}