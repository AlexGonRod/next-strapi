import Link from 'next/link'
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react'
import { Button } from '@components/ui/button'
import { Nav } from '@components/navBar'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@components/ui/sheet'
import { getHeader } from '@app/lib/get-header-info'

export async function Header() {
	const header =await getHeader()
	
  return (
    <header className="relative">
      <div className="bg-secondary text-accent text-center text-sm py-2">
        {header.Title}
      </div>
      
      
            {/* Mobile menu button */}
            {/* <Sheet>
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
            </Sheet> */}
            {/* Logo */}

            {/* Desktop navigation */}
			<Nav />
    </header>
  )
}

