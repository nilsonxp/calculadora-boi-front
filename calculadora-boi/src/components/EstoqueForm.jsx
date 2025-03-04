import InputField from "./InputField";

function EstoqueForm({ estoque, setEstoque, onCalcularSobra }) {
  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
      <div className="grid grid-cols-2 gap-4">
        {["bois", "bandas", "dianteiros", "traseiros"].map((campo) => (
          <InputField 
            key={campo}
            name={campo}
            value={estoque[campo]}
            onChange={(e) => setEstoque({ ...estoque, [campo]: e.target.value })}
          />
        ))}
      </div>

      {/* Botão dentro do EstoqueForm */}
      <button 
        className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 active:scale-95 transition shadow-md hover:shadow-lg mt-4"
        onClick={onCalcularSobra}
      >
        Calcular Sobra
      </button>
    </div>
  );
}

export default EstoqueForm;


