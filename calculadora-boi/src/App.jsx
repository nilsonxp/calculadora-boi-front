import { useState, useRef } from "react";
import Formulario from "./components/Formulario";
import EstoqueForm from "./components/EstoqueForm";
import Resultado from "./components/Resultado";

function App() {
  const [resultado, setResultado] = useState(null);
  const [estoque, setEstoque] = useState({ bois: "", bandas: "", dianteiros: "", traseiros: "" });
  const [sobra, setSobra] = useState(null);
  const [erroVenda, setErroVenda] = useState(null);
  const [erroSobra, setErroSobra] = useState(null);
  const [shake, setShake] = useState(false); // Para animação de erro

  // Referências para rolagem automática
  const resultadoRef = useRef(null);
  const sobraRef = useRef(null);

  // Função para calcular venda
  const calcularVenda = async (dados) => {
    setErroVenda(null);
    try {
      const response = await fetch("https://calculadora-boi-production.up.railway.app/calcular-venda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) throw new Error(`Erro ao calcular venda: ${response.status}`);

      const result = await response.json();

      if (result.erro) {
        setErroVenda(result.erro);
        return;
      }

      setResultado(result);
      setTimeout(() => resultadoRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    } catch (error) {
      console.error(error);
      setErroVenda("Erro ao calcular venda. Tente novamente.");
    }
  };

  // Função para calcular sobra de estoque
  const calcularSobra = async () => {
    if (!resultado) {
      setErroSobra("Calcule a venda antes de calcular a sobra.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setErroSobra(null);
    try {
      const estoqueConvertido = Object.fromEntries(
        Object.entries(estoque).map(([key, val]) => [key, val === "" ? 0 : Number(val)])
      );

      const response = await fetch("https://calculadora-boi-production.up.railway.app/calcular-sobra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...estoqueConvertido, venda: resultado }),
      });

      if (!response.ok) throw new Error(`Erro ao calcular sobra: ${response.status}`);

      const result = await response.json();

      if (result.erro) {
        setErroSobra(result.erro);
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }

      setSobra(result);
      setTimeout(() => sobraRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    } catch (error) {
      console.error(error);
      setErroSobra("Erro ao calcular sobra. Tente novamente.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      {/* Faixa verde com "NELORAVE" */}
      <header className="w-full bg-green-500 py-3 flex justify-between items-center px-6 fixed top-0 left-0 z-50 shadow-md">
        <h1 className="text-3xl font-bold text-white">NELORAVE</h1>

        {/* Botão de atualizar */}
        <button 
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => window.location.reload()}
        >
          🔄 Limpar
        </button>
      </header>

      {/* Seção de Vendas */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Entrada de Vendas</h3>
        <div ref={resultadoRef}>
          <Formulario onCalcular={calcularVenda} />
        </div>
        {erroVenda && <p className="text-red-600 mt-2 text-center">{erroVenda}</p>}
        <Resultado titulo="Resultado da Venda" resultado={resultado} />
      </div>

      {/* Seção de Estoque */}
      <div className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-lg ${shake ? "shake" : ""}`}>
        <h3 className="text-xl font-semibold text-red-800 mb-4 text-center">Entrada de Estoque</h3>
        <EstoqueForm estoque={estoque} setEstoque={setEstoque} onCalcularSobra={calcularSobra} />
        {erroSobra && <p className="text-red-600 mt-2 text-center">{erroSobra}</p>}
        <div ref={sobraRef}>
          <Resultado titulo="Sobra no Estoque" resultado={sobra} />
        </div>
      </div>

      {/* Rodapé na parte inferior */}
      <footer className="w-full bg-gray-800 py-3 text-center fixed bottom-0 left-">
        <p className="text-white text-sm">Desenvolvido por <strong>Evox Tech</strong> 🚀</p>
      </footer>
    </div>
  );
}

export default App;
