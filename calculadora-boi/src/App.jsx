import { useState } from "react";
import Formulario from "./components/Formulario";
import EstoqueForm from "./components/EstoqueForm";
import Resultado from "./components/Resultado";

function App() {
  const [resultado, setResultado] = useState(null);
  const [estoque, setEstoque] = useState({ bois: 0, bandas: 0, dianteiros: 0, traseiros: 0 });
  const [sobra, setSobra] = useState(null);
  const [erro, setErro] = useState(null);

  // Função para calcular venda
  const calcularVenda = async (dados) => {
    setErro(null);
    try {
      const response = await fetch("http://localhost:8080/calcular-venda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) throw new Error(`Erro ao calcular venda: ${response.status}`);

      const result = await response.json();
      setResultado(result);
    } catch (error) {
      console.error(error);
      setErro("Erro ao calcular venda. Tente novamente.");
    }
  };

  // Função para calcular sobra de estoque
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
        body: JSON.stringify({ ...estoque, venda: resultado }),
      });

      if (!response.ok) throw new Error(`Erro ao calcular sobra: ${response.status}`);

      const result = await response.json();
      setSobra(result);
    } catch (error) {
      console.error(error);
      setErro("Erro ao calcular sobra. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">NELORAVE</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Calculadora de Bois</h2>

      {/* Seção de Vendas */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Entrada de Vendas</h3>
        <Formulario onCalcular={calcularVenda} />
        <Resultado titulo="Resultado da Venda" resultado={resultado} />
      </div>

      {/* Seção de Estoque */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Entrada de Estoque</h3>
        <EstoqueForm estoque={estoque} setEstoque={setEstoque} />
        <button 
          className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 active:scale-95 transition shadow-md hover:shadow-lg"
          onClick={calcularSobra}
        >
          Calcular Sobra
        </button>
        <Resultado titulo="Sobra no Estoque" resultado={sobra} />
      </div>

      {/* Exibir erro, se houver */}
      {erro && <p className="text-red-600 mt-4">{erro}</p>}
    </div>
  );
}

export default App;
