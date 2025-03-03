function EstoqueForm({ estoque, setEstoque }) {
    return (
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Estoque Inicial</h2>
        <div className="grid grid-cols-2 gap-4">
          {["bois", "bandas", "dianteiros", "traseiros"].map((campo) => (
            <div key={campo} className="relative w-full">
              <input 
                type="number" 
                name={campo} 
                id={campo}
                value={estoque[campo]}
                onChange={(e) => setEstoque({ ...estoque, [campo]: Number(e.target.value) })}
                className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-transparent shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
              />
              <label 
                htmlFor={campo} 
                className="absolute left-2 top-12 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                {campo.charAt(0).toUpperCase() + campo.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default EstoqueForm;
  