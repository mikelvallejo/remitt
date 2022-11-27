async function getProviders(origin, destination, amount) {
    let baseUrl = 'https://api.transferwise.com/v3/comparisons/'
    let response = await fetch(baseUrl + `?sourceCurrency=${origin}&targetCurrency=${destination}&sendAmount=${amount}`)
    let data = await response.json()
    let providers = await data.providers



    return providers

}

export default getProviders