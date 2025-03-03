import { useState } from "react";

function Formulario({ onCalcular }) {
    const [dados, setDados] = useState({ bois: 0, bandas: 0, dianteiros: 0, traseiros: 0 });
  
    const handleChange = (e) => {
      setDados({ ...dados, [e.target.name]: Number(e.target.value) });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onCalcular(dados);
    };
  
    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            
            {/* Input para Bois */}
            <div className="relative w-full">
              <input 
                type="number" 
                name="bois" 
                id="bois"
                placeholder=" " 
                onChange={handleChange} 
                className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-transparent shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
              />
              <label 
                htmlFor="bois" 
                className="absolute left-2 top-13 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Bois
              </label>
            </div>
      
            {/* Input para Bandas */}
            <div className="relative w-full">
              <input 
                type="number" 
                name="bandas" 
                id="bandas"
                placeholder=" " 
                onChange={handleChange} 
                className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-transparent shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
              />
              <label 
                htmlFor="bandas" 
                className="absolute left-2 top-13 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Bandas
              </label>
            </div>
      
            {/* Input para Dianteiros */}
            <div className="relative w-full">
              <input 
                type="number" 
                name="dianteiros" 
                id="dianteiros"
                placeholder=" " 
                onChange={handleChange} 
                className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-transparent shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
              />
              <label 
                htmlFor="dianteiros" 
                className="absolute left-2 top-13 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Dianteiros
              </label>
            </div>
      
            {/* Input para Traseiros */}
            <div className="relative w-full">
              <input 
                type="number" 
                name="traseiros" 
                id="traseiros"
                placeholder=" " 
                onChange={handleChange} 
                className="peer p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-transparent shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
              />
              <label 
                htmlFor="traseiros" 
                className="absolute left-2 top-13 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Traseiros
              </label>
            </div>
      
          </div>
      
          {/* Botão de Submissão */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition transform duration-150 w-full">
            Calcular Venda
          </button>
        </form>
      );      
  }  

export default Formulario;