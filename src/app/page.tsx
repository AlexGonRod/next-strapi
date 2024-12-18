import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { PromoPopup } from '@components/promo-popup'
import { ProductCard } from '@components/product-card'
import { ReviewsSection } from '@components/reviews-section'

const products = [
  {
    id: '1',
    name: 'COLLAR PATRA',
    price: 36.00,
    image: '/placeholder.svg?height=500&width=500',
    material: 'PLATA DE LEY 925',
    colors: [
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Gold', value: '#FFD700' },
    ],
  },
  {
    id: '2',
    name: 'PULSERA LUNA',
    price: 29.99,
    image: '/placeholder.svg?height=500&width=500',
    material: 'PLATA DE LEY 925',
    colors: [
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Gold', value: '#FFD700' },
    ],
  },
  {
    id: '3',
    name: 'ANILLO SOL',
    price: 45.00,
    image: '/placeholder.svg?height=500&width=500',
    material: 'PLATA DE LEY 925',
    colors: [
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Gold', value: '#FFD700' },
    ],
  },
  {
    id: '4',
    name: 'PENDIENTES ESTRELLA',
    price: 39.99,
    image: '/placeholder.svg?height=500&width=500',
    material: 'PLATA DE LEY 925',
    colors: [
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Gold', value: '#FFD700' },
    ],
  },
]

export default function Home() {
  return (
    <>
     <Header />
      {/*  <PromoPopup /> */}
      
      <main className="flex-1">
        <section className="py-16 text-center bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">JEWELRY THAT SPEAKS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Discover our collection of timeless pieces crafted with care and attention to detail
          </p>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">OUR FAVORITES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-0">
          <Link 
            href="/collections/huella" 
            className="relative group overflow-hidden aspect-[16/9] md:aspect-auto"
          >
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Joyas Huella Collection"
              width={1200}
              height={800}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">JOYAS HUELLA</h2>
              <span className="inline-block border-b border-white pb-1 text-sm tracking-wider hover:border-opacity-50 transition-colors">
                VER COLECCIÓN
              </span>
            </div>
          </Link>
          <Link 
            href="/collections/new" 
            className="relative group overflow-hidden aspect-[16/9] md:aspect-auto"
          >
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="New Arrivals Collection"
              width={1200}
              height={800}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">NOVEDADES</h2>
              <span className="inline-block border-b border-white pb-1 text-sm tracking-wider hover:border-opacity-50 transition-colors">
                VER COLECCIÓN
              </span>
            </div>
          </Link>
        </section>

        <ReviewsSection />
      </main>

      <Footer />
    </>
  )
}


