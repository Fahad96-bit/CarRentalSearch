import { Calendar, MapPin, Gift } from "lucide-react"

const MonthlySubscriptionForm = ({
  monthlyPickupLocation,
  setMonthlyPickupLocation,
  monthlyPickupDate,
  onLocationClick,
  onCalendarClick,
  onPromoClick,
  promoCode,
  setPromoCode,
  onShowCars,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-900 mb-2">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
            <input
              type="text"
              value={monthlyPickupLocation}
              onClick={() => onLocationClick("monthly")}
              placeholder="Airport, City or Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent cursor-pointer"
              readOnly
            />
            {monthlyPickupLocation && (
              <button
                onClick={() => setMonthlyPickupLocation("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm font-medium text-gray-900 mb-2">Pickup Date & Time</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
            <input
              type="text"
              value={monthlyPickupDate}
              onClick={() => onCalendarClick("monthly")}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent cursor-pointer"
              readOnly
            />
          </div>
          <div className="mt-2">
            {promoCode ? (
              <div className="flex items-center gap-2 text-sm">
                <Gift className="w-4 h-4 text-gray-700" />
                <span className="font-medium text-gray-900">{promoCode}</span>
                <span className="text-gray-600">(Added Promo Code)</span>
                <button onClick={() => setPromoCode("")} className="text-dollar-red font-medium hover:text-[#c0152d]">
                  Remove
                </button>
              </div>
            ) : (
              <button
                onClick={onPromoClick}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-dollar-red"
              >
                <Gift className="w-4 h-4" />
                Promo Code / Shukran Id
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-[150px] flex flex-col">
          <div className="mb-2 h-5"></div>
          <button
            onClick={onShowCars}
            className="w-full bg-dollar-red hover:bg-[#c0152d] text-white font-semibold py-3 px-6 rounded-md transition-colors uppercase"
          >
            Show Cars
          </button>
        </div>
      </div>
    </div>
  )
}

export default MonthlySubscriptionForm

