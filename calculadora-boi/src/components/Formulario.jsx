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
    <form 
  onSubmit={handleSubmit} 
  className="space-y-4 flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
>
  <div className="grid grid-cols-2 gap-4 w-full">
    {["bois", "bandas", "dianteiros", "traseiros"].map((campo) => (
      <input 
        key={campo}
        type="number" 
        name={campo} 
        placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)} 
        onChange={handleChange} 
        className="p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-800 text-center shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    ))}
  </div>

  {/* Botão de Calcular Venda */}
  <button
    className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 active:scale-95 transition shadow-md hover:shadow-lg">
    Calcular Venda
  </button>
</form>

  );
}

export default Formulario;
