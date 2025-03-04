import React from 'react';

function InputField({ name, value, onChange }) {
    const fullName = {
        'bois': 'Bois',
        'bandas': 'Bandas',
        'dianteiros': 'Dianteiros',
        'traseiros': 'Traseiros'
    };

    const capitalizedName = fullName[name] || name.charAt(0).toUpperCase() + name.slice(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange({ target: { name, value: value === "" ? "" : Number(value) } });
    };

    return (
        <div className="relative w-full">
            <div 
                className="absolute top-0 left-0 w-full text-center text-[10px] sm:text-[11px] md:text-xs 
                            text-gray-500 font-medium"
            >
                {capitalizedName}
            </div>
            <input 
                type="number"
                name={name} 
                id={name}
                value={value}
                onChange={handleInputChange}
                placeholder="0"
                className="p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 text-center 
                           shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none pt-5"
            />
        </div>
    );
}

export default InputField;