import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import { cn } from "@lib/utils"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  material?: string
  colors?: Array<{
    name: string
    value: string
  }>
}

export function ProductCard({ id, name, price, image, material, colors }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="mt-4 space-y-2">
        <Button 
          variant="outline" 
          className="w-full"
        >
          Seleccionar
        </Button>
        
        <div className="text-center space-y-1">
          <h3 className="text-base font-medium tracking-wide">
            {name}
          </h3>
          {material && (
            <p className="text-sm text-gray-600 uppercase">
              {material}
            </p>
          )}
          <p className="text-sm text-gray-900">
            A partir de ${price.toFixed(2)}
          </p>
        </div>

        {colors && colors.length > 0 && (
          <div className="flex justify-center gap-2 pt-2">
            {colors.map((color) => (
              <button
                key={color.name}
                className={cn(
                  "w-6 h-6 rounded-full border border-gray-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  "hover:scale-110 transition-transform"
                )}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

