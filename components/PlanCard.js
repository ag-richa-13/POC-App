const PlanCard = ({ name, price }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{price}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Select Plan
        </button>
      </div>
    );
  };
  
  export default PlanCard;
  