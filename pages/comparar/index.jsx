import { useState, useEffect } from "react";
import ProviderCard from "../../components/ProviderCard/ProviderCard"
import SearchBar from "../../components/SearchBar/SearchBar";
import RateBanner from "../../components/RateBanner/RateBaner";
import Footer from "../../components/Footer/Footer"
import getProviders from '../../utils/getProviders'


const ComparePage = ({ origin, destination, amount, originId, destinationId }) => {

    const [providers, setProviders] = useState([]);

    function sortProviders(providers) {
        return providers.sort((a, b) => {
            if ((b.quotes[0].rate * amount - b.quotes[0].fee * b.quotes[0].rate) < (a.quotes[0].rate * amount - a.quotes[0].fee * a.quotes[0].rate)) {
                return -1;
            }
        });
    }

    const getData = async () => {
        let data = await getProviders(origin, destination, amount);
        sortProviders(data);
        return data
    }


    useEffect(() => {
        getData().then(data => {
            setProviders(data)
        })
    }, []);


    return (
        <>
            <SearchBar origin={origin} destination={destination} amount={amount} originId={originId} destinationId={destinationId} />
            <h1 className="flex justify-center text-center text-3xl mt-10 mx-6">Hemos encontrado {providers.length} proveedores</h1>
            <RateBanner destination={destination} amount={amount} />
            <div>
                {
                    providers.length === 0 ?
                        <h2 className="flex justify-center text-center mt-10 mx-6">
                            No hemos encontado resultados para {destination}. Prueba suerte en otro momento o selecciona otro destino.
                        </h2>
                        :
                        <container>

                            {providers
                                .map((provider, index) => {

                                    return (
                                        <ProviderCard
                                            key={index}
                                            provider={provider}
                                            origin={origin}
                                            destination={destination}
                                            amount={amount}
                                        />
                                    )
                                })}
                        </container>
                }

            </div >
            <Footer />
        </>
    )


}

export async function getServerSideProps(context) {
    const { origin, destination, amount, originId, destinationId } = context.query;
    return {
        props: {
            origin,
            destination,
            amount,
            originId,
            destinationId
        }
    }
}


export default ComparePage