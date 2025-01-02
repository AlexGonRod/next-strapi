import Image from 'next/image'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { CollectionsSection } from '@components/collections-section'
import { ReviewsSection } from '@components/reviews-section'
import { InfoSection } from '@components/info-section'
import { ArticleSection } from '@components/article-section'
import { getHomeInfo } from '@lib/get-home-info'




export default async function Home() {
	const { Title, Description, image } = await getHomeInfo()
	const _description = Description[0].children
  return (
    <>
     <Header />
      
      <main className="flex-1">
			  <section className="text-center">
				  <Image
						src={image}
						alt="Joyas Huella Collection"
						width={1200}
						height={800}
						className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
				  />
				  <div className="py-16">
				<h1 className="text-4xl font-bold mb-4">{ Title}</h1>
				<p className=" max-w-2xl mx-auto px-4">
					{_description[0].text}
					  </p>
					  </div>
        </section>

        <ArticleSection />

		<CollectionsSection />
		<InfoSection />
        <ReviewsSection />
      </main>

      <Footer />
    </>
  )
}


