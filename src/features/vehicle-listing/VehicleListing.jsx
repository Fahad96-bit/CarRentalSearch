import { useSearch } from "../../hooks/useSearch"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const VehicleListing = () => {
  const { searchData } = useSearch()
  const navigate = useNavigate()

  if (!searchData) {
    return (
      <div className="min-h-screen bg-white p-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Search</span>
        </button>
        <div className="text-center text-gray-500">No search data available</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Search</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vehicle Listing</h1>

        <div className="bg-gray-50 rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
            Search Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">Booking Type</label>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {searchData.bookingType === "booking" ? "Start Booking" : "Monthly Subscription"}
              </p>
            </div>

            {searchData.pickupLocation && (
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Location</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.pickupLocation}</p>
              </div>
            )}

            {searchData.returnLocation && (
              <div>
                <label className="text-sm font-medium text-gray-500">Return Location</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.returnLocation}</p>
              </div>
            )}

            {searchData.monthlyPickupLocation && (
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Location</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.monthlyPickupLocation}</p>
              </div>
            )}

            {searchData.sameReturnLocation !== undefined && (
              <div>
                <label className="text-sm font-medium text-gray-500">Same Return Location</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {searchData.sameReturnLocation ? "Yes" : "No"}
                </p>
              </div>
            )}

            {searchData.pickupDate && (
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Date & Time</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.pickupDate}</p>
              </div>
            )}

            {searchData.monthlyPickupDate && (
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Date & Time</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.monthlyPickupDate}</p>
              </div>
            )}

            {searchData.returnDate && (
              <div>
                <label className="text-sm font-medium text-gray-500">Return Date & Time</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.returnDate}</p>
              </div>
            )}

            {searchData.promoCode && (
              <div>
                <label className="text-sm font-medium text-gray-500">Promo Code</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">{searchData.promoCode}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleListing

