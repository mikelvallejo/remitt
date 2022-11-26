import requests as rq
import json

latam_currencies = ["ARS", "BOB", "BRL", "CLP", "COP", "CRC", "CUP", "DOP", "GTQ", "HNL", "MXN", "NIO", "PAB", "PEN", "PYG", "SVC", "UYU", "VEF"]

output = {}
for currency in latam_currencies:
    url = f"https://api.transferwise.com/v3/comparisons/?sourceCurrency=EUR&targetCurrency={currency}&sendAmount=100"
    response = rq.get(url)
    output[currency] = response.json()
    with open ("./utils/data/wise_providers.json", "w") as f:
        json.dump(output, f, indent=4)