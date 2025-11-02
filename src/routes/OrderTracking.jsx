import { useParams, Link } from "react-router-dom";

export default function OrderTracking() {
  const { orderId } = useParams();
  const steps = ["Order placed", "Preparing", "Out for delivery", "Delivered"];
  const current = 2; // UI-only demo

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Tracking — Order #{orderId || "12345"}
        </h2>

        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gray-200 rounded-full"></div>

          {steps.map((s, idx) => (
            <div key={s} className="relative flex items-start gap-6">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold z-10 ${
                  idx <= current
                    ? "bg-sky-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {idx + 1}
              </div>
              <div>
                <div
                  className={`font-semibold text-lg ${
                    idx <= current ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {s}
                </div>
                <div className="text-sm text-gray-500">
                  {idx <= current ? "Completed" : "Pending"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="text-sky-600 underline text-sm hover:text-sky-700"
          >
            ← Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
