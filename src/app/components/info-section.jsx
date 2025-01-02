import Link from 'next/link'
import { getInfo } from '@lib/get-footer'

export async function InfoSection() {
	const data = await getInfo()

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className=" flex justify-start md:justify-center items-center flex-row flex-wrap gap-12">
					{data.map(({title, id}) => (
						<div key={id}>
							<p className="text-primary dark:text-secondary flex-grow">{title}</p>
						</div>
					))}
				</div>
			</div>
          </section>
	)
}