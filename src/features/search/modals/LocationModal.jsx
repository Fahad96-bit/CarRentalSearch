import { MapPin, Building2, X } from "lucide-react"

const LocationModal = ({ onClose, onSelect }) => {
  const airports = [
    "Dubai Airport - Terminal 1 (DXB)",
    "Dubai Airport - Terminal 2 (DXB)",
    "Dubai Airport - Terminal 3 (DXB)",
    "Sharjah Airport (SHJ)",
    "Zayed International Airport (AUH)",
  ]

  const deliveryAreas = ["Dubai Motor City", "Dubai Marina Mall"]

  const handleSelectLocation = (location) => {
    onSelect(location)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl max-h-[80vh] overflow-hidden flex">
        <div className="w-80 border-r border-gray-200 overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Airport Locations</h3>
            </div>
            <div className="space-y-3">
              {airports.map((airport) => (
                <button
                  key={airport}
                  onClick={() => handleSelectLocation(airport)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {airport}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Free Delivery Areas</h3>
            </div>
            <div className="space-y-3">
              {deliveryAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => handleSelectLocation(area)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative bg-gray-100 flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex-1 relative overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.699999999999!2d55.361389!3d25.2528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDubai+Airport!2sUnited+Arab+Emirates!5e0!3m2!1sen!2s!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white border-t border-gray-200 p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Dubai Airport - Terminal 3 (DXB)</h4>
            <p className="text-sm text-gray-600">Dubai Airport Terminal 3 - Arrivals Hall</p>
            <p className="text-sm text-gray-600">Sunday-Saturday: 00:00-23:59</p>
            <p className="text-sm text-dollar-red mt-2">
              Monthly rentals from Dubai & Sharjah airports are subject to Premium charge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationModal
