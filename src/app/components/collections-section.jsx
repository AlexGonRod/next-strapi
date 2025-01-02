import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@lib/get-categories'

export async function CollectionsSection() {
	const categories = await getCategories()
	
	return (
		<section className="grid md:grid-cols-2 gap-0">
					{categories.map((category) => (
						<div key={ category.slug}>
					<Link 
						href={`/categories/${category.name}`}
						className="relative group overflow-hidden aspect-[16/9] md:aspect-auto"
					>
						<Image
						src={category.image}
						alt="Joyas Huella Collection"
						width={1200}
						height={800}
						className="object-cover w-full h-full"
						/>
						<div className="absolute px-11 bottom-10 inset-0 flex flex-col items-start justify-end text-secondary uppercase">
							<h2 className="text-2xl md:text-[42px] font-bold">{ category.name}</h2>
							<span className="inline-block border-b border-white pb-1 text-sm tracking-wider hover:border-opacity-50">
								VER COLECCIÓN
							</span>
						</div>
							</Link>  
							</div>
					))}
		</section>
	)
}