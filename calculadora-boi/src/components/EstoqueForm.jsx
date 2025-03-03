import InputField from "./InputField";

function EstoqueForm({ estoque, setEstoque }) {
  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
      {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">Estoque Inicial</h2> */}
      <div className="grid grid-cols-2 gap-4">
        {["bois", "bandas", "dianteiros", "traseiros"].map((campo) => (
          <InputField 
            key={campo}
            name={campo}
            value={estoque[campo]}
            onChange={(e) => setEstoque({ ...estoque, [campo]: Number(e.target.value) })}
          />
        ))}
      </div>
    </div>
  );
}

export default EstoqueForm;
