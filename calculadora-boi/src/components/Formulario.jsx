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
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Calculadora de Bois</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="bois" placeholder="Bois" onChange={handleChange} className="border p-2 w-full rounded" />
          <input type="number" name="bandas" placeholder="Bandas" onChange={handleChange} className="border p-2 w-full rounded" />
          <input type="number" name="dianteiros" placeholder="Dianteiros" onChange={handleChange} className="border p-2 w-full rounded" />
          <input type="number" name="traseiros" placeholder="Traseiros" onChange={handleChange} className="border p-2 w-full rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 w-full">
          Calcular Venda
        </button>
      </form>
    );
  }  

export default Formulario;