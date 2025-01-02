import Image from 'next/image'
import { Metadata } from 'next'
import { getDetails } from '@app/lib/get-article-details'

type Props = {
	params: Promise<{ slug: string }>
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	const documentId = (await params).documentId
// 	const product = await fetch(`http://localhost:1337/api/articles/${documentId}`).then((res) => res.json())
// 	console.log(product)

// 	return {title: product.title}
// }

export default async function Page({
  params,
}: {
  params: { id: string }
	}) {
	const id = params.id
	const {title, description, cover, price} = await getDetails(id)
  return (
	<>
	  <main className="flex-1">
			  <section className="text-center">
				  {cover.map(image => (
					  <Image
						  key={image.id}
							src={`http://127.0.0.1:1337${image.url}`}
							alt="Joyas Huella Collection"
							width={1200}
							height={800}
							className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
					  />		  
				  ))}
				  <div className="py-16">
				<h1 className="text-4xl font-bold mb-4">{ title}</h1>
				<p className=" max-w-2xl mx-auto px-4">
					{description}
				</p>
				<p className=" max-w-2xl mx-auto px-4">
					€{price}
				</p>
					  </div>
		</section>
	  </main>
	</>
  )
}


