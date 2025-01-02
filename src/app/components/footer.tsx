import Link from 'next/link'
import { getFooter } from '@lib/get-footer'

export async function Footer() {
	const footer = await getFooter()
	const _entries = Object.entries(footer)

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
	<footer className='container mx-auto px-4 '>
		  <div className="flex justify-start align-middle flex-wrap text-xs">
				<ul className="flex justify-start align-middle flex-wrap text-xs">
					{_entries.map(([key,value]) => (
						<li key={key} className="mr-1">
							<Link href={`/pages/${key}`} rel="”nofollow”">{value} </Link>
						</li>
					))}
			</ul>
		</div>
 	</footer>
	)
}

