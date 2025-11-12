import { ChevronLeft } from "lucide-react"
import { useState } from "react"

const AddressModal = ({ title, onClose, onSubmit }) => {
  const [selectedCity, setSelectedCity] = useState("")
  const [address, setAddress] = useState("")

  const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"]

  const handleSubmit = () => {
    if (selectedCity && address) {
      const formattedLocation = `${selectedCity.toUpperCase()} - ${address}`
      onSubmit(formattedLocation)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent appearance-none bg-white cursor-pointer"
            >
              <option value="">Choose City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Write down your address here"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedCity || !address}
            className="w-full bg-dollar-red hover:bg-[#c0152d] text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddressModal

