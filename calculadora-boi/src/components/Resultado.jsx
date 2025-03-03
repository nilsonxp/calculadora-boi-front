function Resultado({ titulo, resultado }) {
    if (!resultado) return null;
  
    return (
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h2>
        {Object.keys(resultado).map((key) => (
          <p key={key} className="text-gray-700"><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {resultado[key]}</p>
        ))}
      </div>
    );
  }
  
  export default Resultado;
  