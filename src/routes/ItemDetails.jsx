import { Link, useParams } from "react-router-dom";

export default function ItemDetails({ menu }) {
  const { id } = useParams();
  const item = menu?.find((i) => i.id === parseInt(id));

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p className="text-lg">Item not found.</p>
        <Link to="/menu" className="text-sky-600 underline mt-4 block">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image */}
          <div className="relative group h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-md">
            <img
              src={item.image || "https://via.placeholder.com/600x400"}
              alt={item.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>

            <div className="mt-6 text-3xl font-semibold text-amber-600">
              ₹{item.price}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg border text-lg font-bold text-gray-700 hover:bg-gray-100 transition">
                -
              </button>
              <div className="w-12 h-10 flex items-center justify-center border rounded-lg text-lg font-medium">
                1
              </div>
              <button className="w-10 h-10 rounded-lg border text-lg font-bold text-gray-700 hover:bg-gray-100 transition">
                +
              </button>

              <button className="ml-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium shadow-md transition-transform hover:scale-[1.02]">
                Add to Cart
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <Link
                to="/menu"
                className="text-sky-600 hover:text-sky-700 underline"
              >
                ← Back to Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
