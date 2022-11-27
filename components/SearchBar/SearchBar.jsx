import { useState } from "react"
import countries from "../../utils/data/latin_countries.json"
import Select, { components } from "react-select"
import Link from "next/link";


const SearchBar = ({ origin, destination, amount, originId, destinationId }) => {


    const [input, setInput] = useState({
        origin: origin, // set default preselected value
        destination: destination,
        amount: amount,
        originId: originId,
        destinationId: destinationId
    })

    const [toogleActive, setToogleActive] = useState(false)

    function handleToggleActive() {
        setToogleActive(!toogleActive)
    }

    const selectOptions = countries.map(country => ({
        key: country.id,
        value: country.currency.code,
        label: country.name.esp,
        flag: `data:image/png;base64,${country.flag}`,
    }))

    const customStyles = {
        option: (provided, state) => ({
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
            color: '#fff',
        }),
    }

    function reloadPage() {
        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    const { Option } = components
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
            primary: '#047857',
        },
    });




    return (
        <container className="flex justify-center">
            < div class="p-4 mx-6 w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='flex w-full justify-between' onClick={handleToggleActive}>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>


                        <p className="ml-2">
                            Modificar búsqueda
                        </p>

                    </div>
                    <button>
                        {toogleActive ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>

                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        }
                    </button>

                </div>
                {toogleActive ? (
                    <container className="w-full m-4 max-w-lg">
                        <div className="mb-6 ">
                            <label htmlFor="origin" className="block mb-2 text-sm font-medium text-white">Origen</label>
                            <Select
                                id="origin"
                                options={selectOptions}
                                key={selectOptions.label}
                                styles={customStyles}
                                onChange={e => setInput({ ...input, originId: e.key, origin: e.value })}
                                defaultValue={selectOptions[parseInt(originId) - 1]}
                                placeholder="Selecciona el país origen"
                                className="text-black"
                                components={{ Option: IconOption }}
                                theme={theme}
                            />

                        </div>
                        <div className="mb-6">
                            <label htmlFor="destination" className="block mb-2 text-sm font-medium text-white">Destino</label>
                            <Select
                                id="destination"
                                options={selectOptions}
                                key={selectOptions.label}
                                styles={customStyles}
                                defaultValue={selectOptions[parseInt(destinationId) - 1]}
                                onChange={e => setInput({ ...input, destinationId: e.key, destination: e.value })}
                                className="text-black"
                                components={{ Option: IconOption }}
                                theme={theme}
                            />
                        </div>
                        <div className="lg:flex justify-between">
                            <div className="">
                                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Dinero a enviar</label>
                                <input
                                    type="number"
                                    id="amount"
                                    className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                                    defaultValue={amount}
                                    required=""
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
                                <button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm h-10 px-5 py-2.5 text-center mt-8" onClick={reloadPage}>Actualizar búsqueda</button>
                            </Link>
                        </div>
                    </container>
                ) : null}
            </div >
        </container >
    )
}

export default SearchBar