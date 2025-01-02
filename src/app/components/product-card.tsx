'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@components/ui/button'

type Cover = {
	documentId: string
	url: string
}
interface ProductCardProps {
  documentId: string
  slug: string
  title: string
  price: number
 cover: Cover[]
}

export function ProductCard({ documentId, slug, title, price, cover }: ProductCardProps) {
	const router = useRouter()
  return (
    <div className="group">
      <Link href={`/product/${documentId}`} className="block w-[285] h-[410]">
			<div className="overflow-hidden bg-gray-50 w-full h-full">
					  <Image
						  key={cover[0].documentId}
						  src={`http://127.0.0.1:1337${cover[0].url}`}
						  alt={cover[0].url}
						  width={500}
						  height={500}
						  className="group-hover:scale-105 transition-transform duration-300"
					  />
			</div>
      </Link>
      
      <div className="mt-4 space-y-2">
        <Button 
          variant="outline" 
				  className="w-full"
				  onClick={() => router.push(`/product/${documentId}`)}
        >
          Seleccionar
        </Button>
        
        <div className="text-center space-y-1">
          <h3 className="text-base font-medium tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-gray-900">
            A partir de ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

