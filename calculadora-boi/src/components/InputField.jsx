import React from 'react';

function InputField({ name, value, onChange }) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    return (
      <div className="relative w-full">
        <input 
          type="number" 
          name={name} 
          id={name}
          value={value}
          onChange={onChange}
          placeholder={` ${capitalizedName}`}
          className="p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 text-center shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none pt-6"
        />
        {value !== "" && (
          <div className="absolute top-1 left-0 w-full text-center text-xs text-gray-500">
            {capitalizedName}
          </div>
        )}
      </div>
    );
}
  
export default InputField;