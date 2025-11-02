import { useNavigate } from "react-router-dom";

export default function CartPayment() {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: "Veg Thali", price: 120, qty: 1 },
    { id: 2, name: "Masala Dosa", price: 60, qty: 2 },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  const handleProceed = () => {
    // simulate successful order placement
    const fakeOrderId = Math.floor(10000 + Math.random() * 90000);
    navigate(`/track/${fakeOrderId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Section */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

          <div className="space-y-5">
            {items.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <div className="font-semibold text-gray-800">{i.name}</div>
                  <div className="text-sm text-gray-500">Qty: {i.qty}</div>
                </div>
                <div className="text-right text-lg font-medium text-amber-700">
                  ₹{i.price * i.qty}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-sky-600 underline cursor-pointer">
            ← Continue Shopping
          </div>
        </div>

        {/* Summary Section */}
        <aside className="bg-white rounded-2xl shadow-lg p-6 h-fit">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹10</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{subtotal + 10}</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleProceed}
              className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium shadow-md transition-transform hover:scale-[1.02]"
            >
              Proceed to Pay
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Supported: <span className="text-gray-700 font-medium">UPI / Card / COD</span>  
            <br />
            (Design only)
          </div>
        </aside>
      </div>
    </div>
  );
}
