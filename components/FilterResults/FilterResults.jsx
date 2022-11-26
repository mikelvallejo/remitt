import { useState } from "react";

const FilterResults = () => {
    const [filterStatus, setFilterStatus] = useState('tasa');
    return (
        <>
            <div className="flex justify-end my-2 mx-8">
                <select 
                    name="order" 
                    id="order" 
                    className="ml-2 color-white bg-inherit"
                    onChange={(e) => setFilterStatus(e.target.value)}
                    >
                    <option value="tasa">Mejor tasa</option>
                    <option value="comision">Sin comisión</option>
                </select>
            </div>

        </>
    )
}

export default FilterResults
