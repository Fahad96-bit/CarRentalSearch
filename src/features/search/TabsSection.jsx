import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSearch } from "../../hooks/useSearch"
import StartBookingForm from "./StartBookingForm"
import MonthlySubscriptionForm from "./MonthlySubscriptionForm"
import LocationModal from "./modals/LocationModal"
import CalendarModal from "./modals/CalendarModal"
import AddressModal from "./modals/AddressModal"
import PromoModal from "./modals/PromoModal"

const TabsSection = () => {
  const navigate = useNavigate()
  const { updateSearchData } = useSearch()
  const [activeTab, setActiveTab] = useState("booking")
  const [sameReturnLocation, setSameReturnLocation] = useState(false)
  const [pickupDate, setPickupDate] = useState("12 Nov 2025 | 09:00 AM")
  const [returnDate, setReturnDate] = useState("13 Nov 2025 | 09:00 AM")
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")
  const [monthlyPickupLocation, setMonthlyPickupLocation] = useState("")
  const [monthlyPickupDate, setMonthlyPickupDate] = useState("12 Nov 2025 | 09:00 AM")
  const [promoCode, setPromoCode] = useState("")
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [locationModalType, setLocationModalType] = useState("")
  const [showCalendarModal, setShowCalendarModal] = useState(false)
  const [calendarModalType, setCalendarModalType] = useState("")
  const [showDeliveryModal, setShowDeliveryModal] = useState(false)
  const [showCollectModal, setShowCollectModal] = useState(false)
  const [showPromoModal, setShowPromoModal] = useState(false)

  const openLocationModal = (type) => {
    setLocationModalType(type)
    setShowLocationModal(true)
  }

  const openCalendarModal = (type) => {
    setCalendarModalType(type)
    setShowCalendarModal(true)
  }

  const handleShowCars = () => {
    const searchData = {
      bookingType: activeTab,
      sameReturnLocation,
      pickupDate,
      returnDate,
      pickupLocation,
      returnLocation,
      monthlyPickupLocation,
      monthlyPickupDate,
      promoCode,
    }
    updateSearchData(searchData)
    navigate("/vehicle-listing")
  }

  return (
    <div className="w-full bg-white">
      <div className="border-b border-gray-200 px-6">
        <div className="flex gap-12">
          <button
            onClick={() => setActiveTab("booking")}
            className={`py-4 text-sm font-medium transition-colors relative ${
              activeTab === "booking" ? "text-dollar-red" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Start Booking
            {activeTab === "booking" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-dollar-red"></div>}
          </button>
          <button
            onClick={() => setActiveTab("subscription")}
            className={`py-4 text-sm font-medium transition-colors relative ${
              activeTab === "subscription" ? "text-dollar-red" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly Subscription
            {activeTab === "subscription" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-dollar-red"></div>}
          </button>
        </div>
      </div>
      <div className="px-6 py-8">
        {activeTab === "booking" && (
          <StartBookingForm
            sameReturnLocation={sameReturnLocation}
            setSameReturnLocation={setSameReturnLocation}
            pickupDate={pickupDate}
            setPickupDate={setPickupDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            pickupLocation={pickupLocation}
            setPickupLocation={setPickupLocation}
            returnLocation={returnLocation}
            setReturnLocation={setReturnLocation}
            onLocationClick={openLocationModal}
            onCalendarClick={openCalendarModal}
            onDeliveryClick={() => setShowDeliveryModal(true)}
            onCollectClick={() => setShowCollectModal(true)}
            onPromoClick={() => setShowPromoModal(true)}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onShowCars={handleShowCars}
          />
        )}
        {activeTab === "subscription" && (
          <MonthlySubscriptionForm
            monthlyPickupLocation={monthlyPickupLocation}
            setMonthlyPickupLocation={setMonthlyPickupLocation}
            monthlyPickupDate={monthlyPickupDate}
            setMonthlyPickupDate={setMonthlyPickupDate}
            onLocationClick={openLocationModal}
            onCalendarClick={openCalendarModal}
            onPromoClick={() => setShowPromoModal(true)}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onShowCars={handleShowCars}
          />
        )}
      </div>
      {showLocationModal && (
        <LocationModal
          type={locationModalType}
          onClose={() => setShowLocationModal(false)}
          onSelect={(location) => {
            if (locationModalType === "pickup") {
              setPickupLocation(location)
            } else if (locationModalType === "return") {
              setReturnLocation(location)
            } else if (locationModalType === "monthly") {
              setMonthlyPickupLocation(location)
            }
            setShowLocationModal(false)
          }}
        />
      )}
      {showCalendarModal && (
        <CalendarModal
          type={calendarModalType}
          onClose={() => setShowCalendarModal(false)}
          currentPickupDate={pickupDate}
          currentReturnDate={returnDate}
          onSelect={(date) => {
            if (calendarModalType === "pickup") {
              setPickupDate(date)
            } else if (calendarModalType === "return") {
              setReturnDate(date)
            } else if (calendarModalType === "monthly") {
              setMonthlyPickupDate(date)
            }
            setShowCalendarModal(false)
          }}
        />
      )}
      {showDeliveryModal && (
        <AddressModal
          title="Deliver to me"
          onClose={() => setShowDeliveryModal(false)}
          onSubmit={(location) => {
            setPickupLocation(location)
            setShowDeliveryModal(false)
          }}
        />
      )}
      {showCollectModal && (
        <AddressModal
          title="Collect from me"
          onClose={() => setShowCollectModal(false)}
          onSubmit={(location) => {
            setReturnLocation(location)
            setShowCollectModal(false)
          }}
        />
      )}
      {showPromoModal && (
        <PromoModal
          onClose={() => setShowPromoModal(false)}
          onSubmit={(code) => {
            setPromoCode(code)
            setShowPromoModal(false)
          }}
        />
      )}
    </div>
  )
}

export default TabsSection
