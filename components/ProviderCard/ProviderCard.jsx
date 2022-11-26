import formatAmount from '../../utils/formatAmount'
import providerUrls from "../../utils/data/providerUrls.json"
import { useRouter } from 'next/router'

const ProviderCard = ({ provider, origin, destination, amount }) => {
    const router = useRouter()

    const handleClick = () => {
        if (providerUrls.find(providerUrl => providerUrl.name === provider.name).url) {
            router.push(providerUrls.find(providerUrl => providerUrl.name === provider.name).url)
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
                <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">Recibes {formatAmount(provider.quotes[0].rate * amount - provider.quotes[0].fee * provider.quotes[0].rate)} {' '} {destination} allí</p>
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