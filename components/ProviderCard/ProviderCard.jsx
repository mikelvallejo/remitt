import formatAmount from '../../utils/formatAmount'
import providerUrls from "../../utils/data/providerUrls.json"
import { useRouter } from 'next/router'

const ProviderCard = ({ provider, origin, destination, amount }) => {
    const router = useRouter()

    const handleClick = () => {
        if (providerUrls.find(providerUrl => providerUrl.name === provider.name).url) {
            router.push(providerUrls.find(providerUrl => providerUrl.name === provider.name).url)
            window.analytics.track('partner_button_clicked', {
                provider: provider.name,
                provider_url: providerUrls.find(providerUrl => providerUrl.name === provider.name).url,
            })
        }
        else {
            router.push('www.google.com')
        }
    }


    return (
        <container className="flex justify-center">
            <a onClick={handleClick} class="block p-6 m-6 w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                <div className="flex justify-between">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{provider.name}</h5>
                    <div className="text-l flex hover:underline">
                        Ir a {provider.name}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">Envias {amount} {origin}</p>
                <div class="flex space-x-1">
                    <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">Recibes {formatAmount(provider.quotes[0].rate * amount - provider.quotes[0].fee * provider.quotes[0].rate)} {' '} {destination} allí</p>
                    <a href="#" class=" group relative inline-block text-blue-500 underline hover:text-emerald-500 duration-300 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>

                        <span
                            class="absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 bg-emerald-100 rounded-lg text-center text-emerald-700 text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700">
                            En Remitt calculamos automaticamente el monto que recibirás en destino, teniendo en cuenta el tipo de cambio y las comisiones de la empresa de envíos.
                        </span>
                    </a>
                </div>
                {
                    provider.quotes[0].fee === 0 ?
                        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Sin Comisión</span>
                        :
                        <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Comisión de {provider.quotes[0].fee}€</span>
                }
            </a>
        </container>
    )
}

export default ProviderCard