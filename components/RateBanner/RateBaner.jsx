import exchanges from '../../utils/data/exchanges.json'


const RateBanner = ({ amount, destination }) => {
    function formatAmount(amount) {
        return new Intl.NumberFormat('de-DE').format(amount)
    }

    return (
        <container className="flex justify-center" >
            <div class="bg-emerald-100 rounded-lg py-5 px-6 mb-3 text-base text-emerald-700 inline-flex items-center p-6 m-6 w-full max-w-lg lg:max-w-2x" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>
                    <strong>Tipo de cambio hoy:</strong> {amount} EUR = {formatAmount((exchanges[destination].rate * parseInt(amount)))} {destination}
                </p>
            </div>

        </container>
    )
}

export default RateBanner