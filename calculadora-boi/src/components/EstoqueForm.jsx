import InputField from "./InputField";

function EstoqueForm({ estoque, setEstoque }) {
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
    </div>
  );
}

export default EstoqueForm;

