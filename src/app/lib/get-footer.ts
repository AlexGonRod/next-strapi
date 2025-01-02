import {query} from '@lib/strapi'

export async function getFooter() {
	const {data} = await query('footer?fields[0]=conditions&fields[2]=advice&fields[3]=privacy&fields[4]=cookies')
	const { conditions, advice, privacy, cookies } = data
	return { conditions, advice, privacy, cookies}
}

export async function getInfo() {
	const {data} = await query('infos?fields[0]=title')
	return data
}