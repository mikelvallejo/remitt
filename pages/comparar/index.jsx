import { useState, useEffect } from "react";
import ProviderCard from "../../components/ProviderCard/ProviderCard"
import Navigation from "../../components/Navigation/Navigation";
import SearchBar from "../../components/SearchBar/SearchBar";
import RateBanner from "../../components/RateBanner/RateBaner";
import Footer from "../../components/Footer/Footer"
import getProviders from '../../utils/getProviders'


const ComparePage = ({ origin, destination, amount, originId, destinationId }) => {

    const [providers, setProviders] = useState([]);


    const getData = async () => {
        let data = getProviders(origin, destination, amount)
        return data
    }


    useEffect(() => {
        getData().then(data => {
            setProviders(data)
        })
    }, []);


    return (
        <>
            <Navigation />
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

                            {providers.length > 0 && providers
                                .map(provider => {
                                    return (
                                        <ProviderCard provider={provider} origin={origin} destination={destination} amount={amount} />
                                    )
                                }
                                )
                            }
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