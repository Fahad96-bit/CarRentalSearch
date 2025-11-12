import { X } from "lucide-react"
import { useState } from "react"

const PromoModal = ({ onClose, onSubmit }) => {
  const [promoCode, setPromoCode] = useState("")

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Add Promo Code / Shukran Id</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Put your Promo Code / Shukran Id here"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent"
              />
            </div>
            <button
              onClick={() => {
                if (promoCode.trim()) {
                  onSubmit(promoCode)
                }
              }}
              className="bg-dollar-red hover:bg-[#c0152d] text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Submit
            </button>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Maximize your savings with our exclusive promo code! / Shukran Id!
          </p>
        </div>
      </div>
    </div>
  )
}

export default PromoModal
