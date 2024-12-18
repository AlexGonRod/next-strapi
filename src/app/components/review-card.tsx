import { Star, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@components/ui/card'

interface ReviewCardProps {
  author: string
  date: string
  rating: number
  content: string
  verified?: boolean
}

export function ReviewCard({ author, date, rating, content, verified = true }: ReviewCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'fill-green-500 text-green-500' : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          {verified && (
            <div className="flex items-center gap-1 ml-2 text-gray-500 text-xs">
              <CheckCircle className="w-3 h-3" />
              <span>Verificada</span>
            </div>
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-semibold mb-2 line-clamp-3">{content}</h3>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          <span className="font-medium">{author}</span>
          <span className="mx-1">•</span>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

