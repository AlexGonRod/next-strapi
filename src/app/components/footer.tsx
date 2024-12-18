'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const paymentMethods = [
  { name: 'American Express', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Apple Pay', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Google Pay', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Maestro', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Mastercard', image: '/placeholder.svg?height=32&width=32' },
  { name: 'PayPal', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Shop Pay', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Union Pay', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Visa', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Bizum', image: '/placeholder.svg?height=32&width=32' },
  { name: 'MB WAY', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Klarna', image: '/placeholder.svg?height=32&width=32' },
  { name: 'Swish', image: '/placeholder.svg?height=32&width=32' },
]

export function Footer() {
  const [language, setLanguage] = useState('Español')
  const [currency, setCurrency] = useState('TWD')

  return (
    // <footer className="border-t py-6">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //       <div className="flex items-center gap-4">
    //         <div className="relative">
    //           <select 
    //             value={language}
    //             onChange={(e) => setLanguage(e.target.value)}
    //             className="appearance-none bg-transparent pr-8 py-1 focus:outline-none"
    //           >
    //             <option value="Español">Español</option>
    //             <option value="English">English</option>
    //             <option value="Français">Français</option>
    //           </select>
    //           <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    //         </div>

    //         <div className="relative">
    //           <select 
    //             value={currency}
    //             onChange={(e) => setCurrency(e.target.value)}
    //             className="appearance-none bg-transparent pr-8 py-1 focus:outline-none"
    //           >
    //             <option value="TWD">TWD</option>
    //             <option value="USD">USD</option>
    //             <option value="EUR">EUR</option>
    //           </select>
    //           <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    //         </div>

    //         <span className="text-sm text-gray-500">
    //           © 2024, San Saru
    //         </span>
    //       </div>

    //       <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
    //         <Link href="/condiciones-generales" className="hover:text-gray-900 transition-colors">
    //           Condiciones generales
    //         </Link>
    //         <span className="text-gray-300">-</span>
    //         <Link href="/aviso-legal" className="hover:text-gray-900 transition-colors">
    //           Aviso legal
    //         </Link>
    //         <span className="text-gray-300">-</span>
    //         <Link href="/politica-privacidad" className="hover:text-gray-900 transition-colors">
    //           Política de privacidad
    //         </Link>
    //         <span className="text-gray-300">-</span>
    //         <Link href="/politica-cookies" className="hover:text-gray-900 transition-colors">
    //           Política de Cookies
    //         </Link>
    //       </div>

    //       <div className="flex flex-wrap justify-center gap-2">
    //         {paymentMethods.map((method) => (
    //           <div 
    //             key={method.name}
    //             className="h-8 w-12 relative grayscale hover:grayscale-0 transition-all duration-300"
    //           >
    //             <Image
    //               src={method.image}
    //               alt={`Pay with ${method.name}`}
    //               fill
    //               className="object-contain"
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
	
	<div className="new-footer-policy__bottom-row page-width"><small className="site-footer__copyright-content"><a href="/pages/condiciones-generales" rel="”nofollow”">Condiciones generales</a> - <a href="/pages/aviso-legal" rel="”nofollow”">Aviso legal</a> - <a href="/pages/politica-de-privacidad" rel="”nofollow”">Política de privacidad</a> - <a href="/pages/politica-de-cookies" rel="”nofollow”">Política de Cookies</a></small></div>
  )
}

