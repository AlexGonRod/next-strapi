'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react'
import { Button } from '@components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@components/ui/sheet'

export function Header() {
  return (
    <header className="relative">
      <div className="bg-background text-primary-foreground text-center text-sm py-2">
        FREE BRACELET WITH YOUR PURCHASE - LIMITED UNITS!
      </div>
      
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/jewelry" className="text-lg font-medium">
                    Jewelry
                  </Link>
                  <Link href="/collections" className="text-lg font-medium">
                    Collections
                  </Link>
                  <Link href="/new" className="text-lg font-medium">
                    New
                  </Link>
                  <Link href="/outlet" className="text-lg font-medium">
                    Outlet
                  </Link>
                  <Link href="/gift-guide" className="text-lg font-medium">
                    Gift Guide
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight">
              SANSARU
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/jewelry" className="text-sm font-medium hover:text-gray-600 transition-colors">
                JEWELRY
              </Link>
              <Link href="/collections" className="text-sm font-medium hover:text-gray-600 transition-colors">
                COLLECTIONS
              </Link>
              <Link href="/new" className="text-sm font-medium hover:text-gray-600 transition-colors">
                NEW
              </Link>
              <Link href="/outlet" className="text-sm font-medium hover:text-gray-600 transition-colors">
                OUTLET
              </Link>
              <Link href="/gift-guide" className="text-sm font-medium hover:text-gray-600 transition-colors">
                GIFT GUIDE
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

