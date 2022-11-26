from google_currency import convert
import json
from datetime import datetime


class Scraper():
    def get_currency_codes(self):
        """
        Returns a list of currency codes.
        """
        with open('utils/data/countries.json', 'r') as f:
            data = json.load(f)
            latin_american_countries = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador',
                                        'El Salvador', 'Guatemala', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Uruguay', 'Venezuela']
            data = [country for country in data if country['name']['eng']
                    in latin_american_countries]
            codes = []
            for country in data:
                codes.append(country['currency']['code'])
            print('Currency codes: ', codes)

        return codes

    def scrape_google_currency_data(self):
        """
        Scrapes the google currency data and returns the converted value.
        """
        print('Scraping google currency data...')
        codes = self.get_currency_codes()
        all_exchanges = {}
        all_exchanges['base'] = 'EUR'
        all_exchanges['last_updated'] = datetime.now().strftime(
            '%Y-%m-%d %H:%M:%S')
        for code in codes:
            response = json.loads(convert('eur', code, 1))
            response['rate'] = response.pop('amount')
            response.pop('converted')
            all_exchanges[code] = response

        return all_exchanges

    def store_exchange_data(self):
        """
        Stores the scraped data in a json file.
        """
        print('Storing exchange data...')
        data = self.scrape_google_currency_data()
        with open('./utils/data/exchanges.json', 'w') as f:
            json.dump(data, f)


exchange = Scraper()

exchange.store_exchange_data()
