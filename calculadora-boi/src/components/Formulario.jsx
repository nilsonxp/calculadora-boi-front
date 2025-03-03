import { useState } from "react";
import InputField from "./InputField"; // Importando o novo componente de input

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
          <InputField 
            key={campo}
            name={campo}
            value={dados[campo]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button
        className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 active:scale-95 transition shadow-md hover:shadow-lg">
        Calcular Venda
      </button>
    </form>
  );
}

export default Formulario;
