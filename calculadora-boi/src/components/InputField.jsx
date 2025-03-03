function InputField({ name, value, onChange }) {
    return (
      <div className="relative w-full">
        <input 
          type="number" 
          name={name} 
          id={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 text-center shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <label 
          htmlFor={name} 
          className="absolute left-1 top-13 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
      </div>
    );
  }
  
  export default InputField;
  