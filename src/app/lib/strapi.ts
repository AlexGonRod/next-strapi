const { STRAPI_TOKEN, STRAPI_HOST } = process.env

export const query =async  (url: string) => {
	const options = { headers: { Authorization: `Bearer ${STRAPI_TOKEN}` } };
	const response = await fetch(`${STRAPI_HOST}/api/${url}`, options)
	const res = await response.json()

	return res
}