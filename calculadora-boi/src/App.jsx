import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [resultado, setResultado] = useState(null);

  const [erro, setErro] = useState(null);

  const calcularVenda = async (dados) => {
    setErro(null); // Limpa erros anteriores
    console.log("Enviando dados:", dados);
  
    try {
      const response = await fetch("http://localhost:8080/calcular-venda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
    
      console.log("Response status:", response.status);
    
      if (!response.ok) {
        throw new Error(`Erro ao calcular venda: ${response.status}`);
      }
    
      const result = await response.json();
      console.log("Resposta da API:", result);
      setResultado(result);
    } catch (error) {
      console.error(error);
      setErro("Erro ao calcular venda. Tente novamente.");
    }
  };  
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-gray-700 mb-4">Calculadora de Bois</h1>
    <Formulario onCalcular={calcularVenda} />

    {erro && <p className="text-red-600 mt-4">{erro}</p>}
    
    {resultado && (
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Resultado:</h2>
        <p className="text-gray-700"><strong>Bois:</strong> {resultado.bois}</p>
        <p className="text-gray-700"><strong>Bandas:</strong> {resultado.bandas}</p>
        <p className="text-gray-700"><strong>Dianteiros:</strong> {resultado.dianteiros}</p>
        <p className="text-gray-700"><strong>Traseiros:</strong> {resultado.traseiros}</p>
      </div>
    )}
  </div>
);
}

export default App;