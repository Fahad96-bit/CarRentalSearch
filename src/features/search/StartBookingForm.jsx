import { Calendar, MapPin, Truck, Gift } from "lucide-react"

const StartBookingForm = ({
  sameReturnLocation,
  setSameReturnLocation,
  pickupDate,
  returnDate,
  pickupLocation,
  setPickupLocation,
  returnLocation,
  setReturnLocation,
  onLocationClick,
  onCalendarClick,
  onDeliveryClick,
  onCollectClick,
  onPromoClick,
  promoCode,
  setPromoCode,
  onShowCars,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <div className={sameReturnLocation ? "flex-[2] min-w-[200px]" : "flex-1 min-w-[200px]"}>
          <label className="block text-sm font-medium text-gray-900 mb-2">Pickup & Return Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
            <input
              type="text"
              value={pickupLocation}
              onClick={() => onLocationClick("pickup")}
              placeholder="Airport, City or Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent cursor-pointer"
              readOnly
            />
            {pickupLocation && (
              <button
                onClick={() => setPickupLocation("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={onDeliveryClick}
            className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-dollar-red"
          >
            <Truck className="w-4 h-4" />
            Deliver to me
          </button>
        </div>
        
        {!sameReturnLocation && (
          <div className="flex-1 min-w-[200px]">
            <div className="mb-2 flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer" onClick={() => setSameReturnLocation(!sameReturnLocation)}>
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                    sameReturnLocation ? "bg-dollar-red border-dollar-red" : "border-gray-300"
                  }`}
                >
                  {sameReturnLocation && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">Same Return Location</span>
              </label>
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
              <input
                type="text"
                value={returnLocation}
                onClick={() => onLocationClick("return")}
                placeholder="Airport, City or Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent cursor-pointer"
                readOnly
              />
              {returnLocation && (
                <button
                  onClick={() => setReturnLocation("")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              onClick={onCollectClick}
              className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-dollar-red"
            >
              <Truck className="w-4 h-4" />
              Collect from me
            </button>
          </div>
        )}
        
        {sameReturnLocation && (
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer" onClick={() => setSameReturnLocation(!sameReturnLocation)}>
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                  sameReturnLocation ? "bg-dollar-red border-dollar-red" : "border-gray-300"
                }`}
              >
                {sameReturnLocation && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900">Same Return Location</span>
            </label>
          </div>
        )}
        
        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm font-medium text-gray-900 mb-2">Pickup Date & Time</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
            <input
              type="text"
              value={pickupDate}
              onClick={() => onCalendarClick("pickup")}
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
        
        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm font-medium text-gray-900 mb-2">Return Date & Time</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-700" />
            <input
              type="text"
              value={returnDate}
              onClick={() => onCalendarClick("return")}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dollar-red focus:border-transparent cursor-pointer"
              readOnly
            />
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

export default StartBookingForm

