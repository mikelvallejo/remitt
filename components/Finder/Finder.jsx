import { useState } from "react"
import countries from "../../utils/data/latin_countries.json"
import Select, { components } from "react-select"
import Link from "next/link";


const Finder = () => {

    const [input, setInput] = useState({
        origin: "EUR", // set default to Spain
        destination: "COP",
        amount: 100,
        originId: 1,
        destinationId: 6
    })

    const selectOptions = countries.map(country => ({
        key: country.id,
        value: country.currency.code,
        label: country.name.esp,
        flag: `data:image/png;base64,${country.flag}`,
    }))


    const customStyles = {
        option: (provided) => ({
            ...provided,


        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#1F2937',
            color: '#fff',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#fff',

        }),
        input: (provided, state) => ({
            ...provided,
            color: '#fff'
        }),


    }

    const { Option } = components;
    const IconOption = props => (
        <Option {...props}>
            <div className="flex items-center space-x-4">
                <span>
                    <img src={props.data.flag} alt={props.data.label} className="w-6 h-4" />
                </span>
                <span>
                    {props.data.label}
                </span>
            </div>
        </Option>
    )

    const theme = theme => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#ecfdf5',
            primary: '#059669',
        },
    });


    return (
        <container className="flex justify-center" >
            < div class="block p-3 sm:p-6 m-6 w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >
                <div className="m-4 w-1000 flex justify-center">
                    <form className="w-full max-w-lg" method="post">
                        <div className="mb-6">
                            <label htmlFor="origin" className="block mb-2 text-sm font-medium text-white">Origen</label>
                            <Select
                                id="origin"
                                options={selectOptions}
                                key={selectOptions}
                                styles={customStyles}
                                onChange={e => setInput({ ...input, origin: e.value, originId: e.key })}
                                // set default value to Spain
                                defaultValue={selectOptions[0]}
                                placeholder="Selecciona el país origen"
                                className="text-black"
                                components={{ Option: IconOption }}
                                required
                                theme={theme}
                                isDisabled={true}

                            />


                        </div>
                        <div className="mb-6">
                            <label htmlFor="destination" className="block mb-2 text-sm font-medium text-white">Destino</label>
                            <Select
                                id="destination"
                                options={selectOptions}
                                key={selectOptions}
                                styles={customStyles}
                                onChange={e => setInput({ ...input, destination: e.value, destinationId: e.key })}
                                defaultValue={selectOptions[5]}
                                placeholder="Elige dónde enviarlo"
                                className="text-black"
                                components={{ Option: IconOption }}
                                required
                                theme={theme}
                            />
                        </div>
                        <div className="mb-12">
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Dinero a enviar</label>
                            <input
                                type="number"
                                inputMode='numeric'
                                pattern="[0-9]*"
                                id="amount"
                                className="bg-gray-800 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                                required
                                defaultValue="100"
                                onChange={e => setInput({ ...input, amount: e.target.value })} />
                        </div>
                        <Link href={{
                            pathname: "/comparar",
                            query: {
                                origin: input.origin,
                                destination: input.destination,
                                amount: input.amount,
                                originId: input.originId,
                                destinationId: input.destinationId
                            }
                        }}
                            as={`/comparar?origin=${input.origin}&destination=${input.destination}&amount=${input.amount}&originId=${input.originId}&destinationId=${input.destinationId}`}
                        >
                            <button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Buscar el mejor precio</button>

                        </Link>
                    </form>
                </div >
            </div >
        </container >
    )
}

export default Finder