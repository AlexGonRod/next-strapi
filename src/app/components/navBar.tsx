import Link from 'next/link'
import { getNavigation } from '@lib/get-navigation'
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react'
import { Button } from '@components/ui/button'

export async function Nav() {
	const nav =await getNavigation()
	const object = Object.entries(nav)

	return (
					<nav className="container border-b mx-auto px-4 hidden items-center justify-between h-16 md:h-20  md:flex">
						<Link href="/" className="text-2xl font-bold tracking-tight">
							SANSARU
						</Link>
						<div className="md:flex gap-6" >
							{object && object.map(([key, value]) => (
								<ul key={key}>
									<li>
										<Link href={`/${ key}`}  className="uppercase text-sm font-medium hover:text-secondary hover:font-bold transition gap-6">
											{value}
										</Link>
									</li>
								</ul>
								)
							)}
					</div>
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
				</nav>
	)
}