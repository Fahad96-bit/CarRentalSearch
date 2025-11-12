import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const CalendarModal = ({ type, onClose, onSelect, currentPickupDate, currentReturnDate }) => {
  const parseDateString = (dateStr) => {
    if (!dateStr) return null
    try {
      const parts = dateStr.split("|")
      if (parts.length !== 2) return null
      const datePart = parts[0].trim()
      const timePart = parts[1].trim()
      
      const dateMatch = datePart.match(/(\d+)\s+(\w+)(?:\s+(\d+))?/)
      if (!dateMatch) return null
      
      const day = parseInt(dateMatch[1])
      const monthName = dateMatch[2]
      const year = dateMatch[3] ? parseInt(dateMatch[3]) : new Date().getFullYear()
      
      const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].findIndex(m => monthName.startsWith(m))
      if (monthIndex === -1) return null
      
      const timeMatch = timePart.match(/(\d+):(\d+)\s*(AM|PM)/i)
      if (!timeMatch) return null
      
      let hour = parseInt(timeMatch[1])
      const minute = parseInt(timeMatch[2])
      const ampm = timeMatch[3].toUpperCase()
      
      if (ampm === "PM" && hour !== 12) hour += 12
      if (ampm === "AM" && hour === 12) hour = 0
      
      return {
        date: new Date(year, monthIndex, day),
        time: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`,
        ampm: ampm
      }
    } catch {
      return null
    }
  }

  const parsedPickup = parseDateString(currentPickupDate) || { date: new Date(2025, 10, 12), time: "09:00", ampm: "AM" }
  const parsedReturn = parseDateString(currentReturnDate) || { date: new Date(2025, 10, 13), time: "09:00", ampm: "AM" }

  const [currentMonth, setCurrentMonth] = useState(parsedPickup.date)
  const [selectedPickupDate, setSelectedPickupDate] = useState(parsedPickup.date.getDate())
  const [selectedPickupMonth, setSelectedPickupMonth] = useState(parsedPickup.date.getMonth())
  const [selectedPickupYear, setSelectedPickupYear] = useState(parsedPickup.date.getFullYear())
  const [selectedReturnDate, setSelectedReturnDate] = useState(parsedReturn.date.getDate())
  const [selectedReturnMonth, setSelectedReturnMonth] = useState(parsedReturn.date.getMonth())
  const [selectedReturnYear, setSelectedReturnYear] = useState(parsedReturn.date.getFullYear())
  const [pickupTime, setPickupTime] = useState(parsedPickup.time)
  const [returnTime, setReturnTime] = useState(parsedReturn.time)
  const [pickupAmPm, setPickupAmPm] = useState(parsedPickup.ampm)
  const [returnAmPm, setReturnAmPm] = useState(parsedReturn.ampm)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1
  }

  const renderCalendar = (date) => {
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  const month1 = currentMonth
  const month2 = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)

  const days1 = renderCalendar(month1)
  const days2 = renderCalendar(month2)

  const formatDate = (day, month, year, time24, ampm) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [hour24, minute] = time24.split(":")
    let hour12 = parseInt(hour24)
    let displayAmPm = ampm
    
    if (ampm === "AM") {
      if (hour12 === 0) hour12 = 12
      else if (hour12 > 12) hour12 = hour12 - 12
    } else {
      if (hour12 === 0) hour12 = 12
      else if (hour12 > 12) hour12 = hour12 - 12
    }
    
    const time12 = `${hour12.toString().padStart(2, "0")}:${minute}`
    return `${day} ${monthNames[month]} ${year} | ${time12} ${displayAmPm}`
  }

  const handleConfirm = () => {
    const pickupDateStr = formatDate(selectedPickupDate, selectedPickupMonth, selectedPickupYear, pickupTime, pickupAmPm)
    const returnDateStr = formatDate(selectedReturnDate, selectedReturnMonth, selectedReturnYear, returnTime, returnAmPm)

    if (type === "pickup") {
      onSelect(pickupDateStr)
    } else if (type === "return") {
      onSelect(returnDateStr)
    } else if (type === "monthly") {
      onSelect(pickupDateStr)
    }
  }

  const handleDateSelect = (day, month, year) => {
    if (type === "pickup") {
      setSelectedPickupDate(day)
      setSelectedPickupMonth(month)
      setSelectedPickupYear(year)
    } else if (type === "return") {
      setSelectedReturnDate(day)
      setSelectedReturnMonth(month)
      setSelectedReturnYear(year)
    } else if (type === "monthly") {
      setSelectedPickupDate(day)
      setSelectedPickupMonth(month)
      setSelectedPickupYear(year)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl overflow-hidden">
        <div className="flex h-[70vh]">
          <div className="w-80 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
            <div className="space-y-6 flex-1">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-600">Select pick up location</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Pickup : 12 Nov 2025 | 09:00 AM</p>
              </div>

              {type !== "monthly" && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Building2Icon className="w-5 h-5 text-gray-700" />
                    <span className="text-sm text-gray-600">Select return location</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Return : 13 Nov 2025 | 09:00 AM</p>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full mt-6 py-2 text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className={`flex ${type === "monthly" ? "" : "gap-16"} flex-1 justify-center`}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {monthNames[month1.getMonth()]} {month1.getFullYear()}
                </h3>
                {type !== "monthly" && (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {monthNames[month2.getMonth()]} {month2.getFullYear()}
                  </h3>
                )}
              </div>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className={`flex-1 flex overflow-y-auto ${type === "monthly" ? "justify-center" : ""}`}>
              <div className={`${type === "monthly" ? "w-full max-w-md" : "flex-1"} p-6 ${type !== "monthly" ? "border-r border-gray-200" : ""} overflow-y-auto`}>
                <CalendarGrid
                  days={dayNames}
                  dates={days1}
                  month={month1.getMonth()}
                  year={month1.getFullYear()}
                  selectedDate={type === "pickup" || type === "monthly" ? selectedPickupDate : null}
                  selectedMonth={type === "pickup" || type === "monthly" ? selectedPickupMonth : null}
                  selectedYear={type === "pickup" || type === "monthly" ? selectedPickupYear : null}
                  onSelectDate={(day) => handleDateSelect(day, month1.getMonth(), month1.getFullYear())}
                />
              </div>

              {type !== "monthly" && (
                <div className="flex-1 p-6 overflow-y-auto">
                  <CalendarGrid
                    days={dayNames}
                    dates={days2}
                    month={month2.getMonth()}
                    year={month2.getFullYear()}
                    selectedDate={type === "return" ? selectedReturnDate : null}
                    selectedMonth={type === "return" ? selectedReturnMonth : null}
                    selectedYear={type === "return" ? selectedReturnYear : null}
                    onSelectDate={(day) => handleDateSelect(day, month2.getMonth(), month2.getFullYear())}
                  />
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 p-6 bg-white">
              {type === "monthly" ? (
                <div className="mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Pickup Date & Time</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(selectedPickupDate, selectedPickupMonth, selectedPickupYear, pickupTime, pickupAmPm).split("|")[0].trim()} | {(() => {
                        const [hour, minute] = pickupTime.split(":")
                        let hour12 = parseInt(hour)
                        if (hour12 === 0) hour12 = 12
                        else if (hour12 > 12) hour12 = hour12 - 12
                        return `${hour12.toString().padStart(2, "0")}:${minute} ${pickupAmPm}`
                      })()}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Pickup Date & Time</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(selectedPickupDate, selectedPickupMonth, selectedPickupYear, pickupTime, pickupAmPm).split("|")[0].trim()} | {(() => {
                        const [hour, minute] = pickupTime.split(":")
                        let hour12 = parseInt(hour)
                        if (hour12 === 0) hour12 = 12
                        else if (hour12 > 12) hour12 = hour12 - 12
                        return `${hour12.toString().padStart(2, "0")}:${minute} ${pickupAmPm}`
                      })()}
                    </p>
                  </div>
                  <div className="text-center text-sm font-medium text-gray-600">
                    {Math.ceil((new Date(selectedReturnYear, selectedReturnMonth, selectedReturnDate) - new Date(selectedPickupYear, selectedPickupMonth, selectedPickupDate)) / (1000 * 60 * 60 * 24))} days
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Return Date & Time</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(selectedReturnDate, selectedReturnMonth, selectedReturnYear, returnTime, returnAmPm).split("|")[0].trim()} | {(() => {
                        const [hour, minute] = returnTime.split(":")
                        let hour12 = parseInt(hour)
                        if (hour12 === 0) hour12 = 12
                        else if (hour12 > 12) hour12 = hour12 - 12
                        return `${hour12.toString().padStart(2, "0")}:${minute} ${returnAmPm}`
                      })()}
                    </p>
                  </div>
                </div>
              )}

              <div className={`flex gap-12 ${type === "monthly" ? "justify-center" : "justify-center"}`}>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      const [hour, minute] = pickupTime.split(":")
                      let newHour = parseInt(hour) - 1
                      if (newHour < 0) newHour = 23
                      setPickupTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                    }}
                  >
                    <span className="text-gray-600 text-lg">−</span>
                  </button>
                  <span className="text-sm font-medium text-gray-900 w-12 text-center">
                    {(() => {
                      const [hour, minute] = pickupTime.split(":")
                      let hour12 = parseInt(hour)
                      if (hour12 === 0) hour12 = 12
                      else if (hour12 > 12) hour12 = hour12 - 12
                      return `${hour12.toString().padStart(2, "0")}:${minute}`
                    })()}
                  </span>
                  <button
                    onClick={() => {
                      const [hour, minute] = pickupTime.split(":")
                      let newHour = parseInt(hour) + 1
                      if (newHour > 23) newHour = 0
                      setPickupTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                    }}
                  >
                    <span className="text-gray-600 text-lg">+</span>
                  </button>
                  <div className="flex gap-2 ml-2">
                    <button
                      onClick={() => {
                        const [hour, minute] = pickupTime.split(":")
                        let newHour = parseInt(hour)
                        if (pickupAmPm === "PM" && newHour < 12) newHour += 12
                        if (pickupAmPm === "AM" && newHour >= 12) newHour -= 12
                        setPickupTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                        setPickupAmPm("AM")
                      }}
                      className={`px-3 py-1 text-xs font-semibold rounded ${pickupAmPm === "AM" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                      AM
                    </button>
                    <button
                      onClick={() => {
                        const [hour, minute] = pickupTime.split(":")
                        let newHour = parseInt(hour)
                        if (pickupAmPm === "AM" && newHour < 12) newHour += 12
                        if (pickupAmPm === "PM" && newHour >= 12) newHour -= 12
                        setPickupTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                        setPickupAmPm("PM")
                      }}
                      className={`px-3 py-1 text-xs font-semibold rounded ${pickupAmPm === "PM" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                      PM
                    </button>
                  </div>
                </div>

                {type !== "monthly" && (
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => {
                        const [hour, minute] = returnTime.split(":")
                        let newHour = parseInt(hour) - 1
                        if (newHour < 0) newHour = 23
                        setReturnTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                      }}
                    >
                      <span className="text-gray-600 text-lg">−</span>
                    </button>
                    <span className="text-sm font-medium text-gray-900 w-12 text-center">
                      {(() => {
                        const [hour, minute] = returnTime.split(":")
                        let hour12 = parseInt(hour)
                        if (hour12 === 0) hour12 = 12
                        else if (hour12 > 12) hour12 = hour12 - 12
                        return `${hour12.toString().padStart(2, "0")}:${minute}`
                      })()}
                    </span>
                    <button
                      onClick={() => {
                        const [hour, minute] = returnTime.split(":")
                        let newHour = parseInt(hour) + 1
                        if (newHour > 23) newHour = 0
                        setReturnTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                      }}
                    >
                      <span className="text-gray-600 text-lg">+</span>
                    </button>
                    <div className="flex gap-2 ml-2">
                      <button
                        onClick={() => {
                          const [hour, minute] = returnTime.split(":")
                          let newHour = parseInt(hour)
                          if (returnAmPm === "PM" && newHour < 12) newHour += 12
                          if (returnAmPm === "AM" && newHour >= 12) newHour -= 12
                          setReturnTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                          setReturnAmPm("AM")
                        }}
                        className={`px-3 py-1 text-xs font-semibold rounded ${returnAmPm === "AM" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        AM
                      </button>
                      <button
                        onClick={() => {
                          const [hour, minute] = returnTime.split(":")
                          let newHour = parseInt(hour)
                          if (returnAmPm === "AM" && newHour < 12) newHour += 12
                          if (returnAmPm === "PM" && newHour >= 12) newHour -= 12
                          setReturnTime(`${newHour.toString().padStart(2, "0")}:${minute}`)
                          setReturnAmPm("PM")
                        }}
                        className={`px-3 py-1 text-xs font-semibold rounded ${returnAmPm === "PM" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        PM
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleConfirm}
                className="mt-6 w-full bg-dollar-red hover:bg-[#c0152d] text-white font-semibold py-3 rounded-md transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CalendarGrid = ({ days, dates, month, year, selectedDate, selectedMonth, selectedYear, onSelectDate }) => {
  const isSelected = (date) => {
    if (date === null || selectedDate === null) return false
    return date === selectedDate && month === selectedMonth && year === selectedYear
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-7 gap-1 mb-3">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-700 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => date && onSelectDate(date)}
            className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded transition-colors ${
              date === null ? "" : isSelected(date) ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  )
}

const Building2Icon = (props) => {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-4h1m-1 4h1"
      />
    </svg>
  )
}

export default CalendarModal
