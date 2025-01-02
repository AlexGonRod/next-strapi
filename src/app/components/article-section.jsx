import Link from 'next/link'
import { getArticle } from '@lib/get-article-info'
import { ProductCard } from '@components/product-card'

export async function ArticleSection() {
	const products = await getArticle()
	return (
		<section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-left mb-12">VUESTRAS FAVORITAS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
	)
}