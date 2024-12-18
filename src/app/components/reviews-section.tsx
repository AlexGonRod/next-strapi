'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@components/ui/button'
import { ReviewCard } from './review-card'

const reviews = [
  {
    author: "Sofía Poudereux R.",
    date: "Hace 1 día",
    rating: 5,
    content: "Todo bien, me gustaron los artículos"
  },
  {
    author: "Eva Ferrer",
    date: "Hace 1 día",
    rating: 5,
    content: "Piezas bonitas"
  },
  {
    author: "Marta González C.",
    date: "Hace 1 día",
    rating: 5,
    content: "Joyas perfectas"
  },
  {
    author: "Patricia Izquierdo",
    date: "Hace 1 día",
    rating: 5,
    content: "Siempre es un placer comprar en San Saru. La relación calidad-precio es excelente"
  },
  {
    author: "Roger",
    date: "Hace 1 día",
    rating: 5,
    content: "Rapidez y calidad"
  }
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(5)
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + slidesToShow >= reviews.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? Math.max(reviews.length - slidesToShow, 0) : prevIndex - 1
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
            ))}
          </div>
          <p className="text-center">
            Valoración de <span className="font-semibold">4.6</span> sobre 5 en base a{' '}
            <span className="font-semibold">16.400</span> opiniones.{' '}
            <span className="block text-sm text-gray-500">
              Nuestras opiniones de 4 y 5 estrellas.
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(reviews.length / slidesToShow) * 100}%`
              }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="px-2"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-100 z-10"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-100 z-10"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

