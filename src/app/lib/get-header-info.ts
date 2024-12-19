import {query} from '@lib/strapi'

export async function getHeader() {
	const {data} = await query('header')
	return data
}