import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [estoque, setEstoque] = useState({ bois: 0, bandas: 0, dianteiros: 0, traseiros: 0 });
  const [sobra, setSobra] = useState(null);


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
  
  const calcularSobra = async () => {
    if (!resultado) {
      setErro("Calcule a venda antes de calcular a sobra.");
      return;
    }
  
    setErro(null);
    try {
      const response = await fetch("http://localhost:8080/calcular-sobra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...estoque,
          venda: resultado
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao calcular sobra: ${response.status}`);
      }
  
      const result = await response.json();
      setSobra(result);
    } catch (error) {
      console.error(error);
      setErro("Erro ao calcular sobra. Tente novamente.");
    }
  };
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-2">NELORAVE</h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Calculadora de Bois</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <Formulario onCalcular={calcularVenda} />
  
        {erro && <p className="text-red-600 mt-4">{erro}</p>}
  
        {resultado && (
          <div className="mt-7 bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Resultado:</h2>
            <p className="text-gray-700"><strong>Bois:</strong> {resultado.bois}</p>
            <p className="text-gray-700"><strong>Bandas:</strong> {resultado.bandas}</p>
            <p className="text-gray-700"><strong>Dianteiros:</strong> {resultado.dianteiros}</p>
            <p className="text-gray-700"><strong>Traseiros:</strong> {resultado.traseiros}</p>
          </div>
        )}
      </div>
    </div>
  );  
}

export default App;