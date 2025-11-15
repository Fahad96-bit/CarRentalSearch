import { MapPin, X } from "lucide-react"
import { useState } from "react"
import { useBranches } from "../../../hooks/useBranches"

const LocationModal = ({ onClose, onSelect }) => {
  const { data: branchGroups, isLoading } = useBranches("UAE")
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [hoveredBranch, setHoveredBranch] = useState(null)

  const handleSelectLocation = (branch) => {
    setSelectedBranch(branch)
    onSelect(branch.Name)
  }

  const handleMouseEnter = (branch) => {
    setHoveredBranch(branch)
  }

  const handleMouseLeave = () => {
    setHoveredBranch(null)
  }

  const formatTimings = (timings) => {
    if (!timings || !timings.BranchTimings) return ""
    return timings.BranchTimings.map((timing) => 
      `${timing.DayString}: ${timing.Shifts.join(", ")}`
    ).join(" | ")
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600">Loading locations...</p>
        </div>
      </div>
    )
  }

  const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.699999999999!2d55.361389!3d25.2528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDubai+Airport!2sUnited+Arab+Emirates!5e0!3m2!1sen!2s!4v1234567890"

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl max-h-[80vh] overflow-hidden flex">
        <div className="w-80 border-r border-gray-200 overflow-y-auto">
          {branchGroups?.map((group, groupIndex) => (
            <div key={groupIndex} className={groupIndex > 0 ? "p-6 border-t border-gray-200" : "p-6 border-b border-gray-200"}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{group.name}</h3>
              </div>
              <div className="space-y-3">
                {group.branches.map((branch) => (
                  <button
                    key={branch._id}
                    onClick={() => handleSelectLocation(branch)}
                    onMouseEnter={() => handleMouseEnter(branch)}
                    onMouseLeave={handleMouseLeave}
                    className={`w-full text-left px-4 py-3 text-sm rounded-md transition-colors ${
                      selectedBranch?._id === branch._id
                        ? "bg-gray-200 text-gray-900 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {branch.Name}
                  </button>
                ))}
              </div>
            </div>
          ))}
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
              src={(hoveredBranch || selectedBranch)?.GoogleLocationURL || defaultMapUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {(hoveredBranch || selectedBranch) && (
            <div className="bg-white border-t border-gray-200 p-4">
              <h4 className="font-semibold text-gray-900 mb-1">{(hoveredBranch || selectedBranch).Name}</h4>
              {(hoveredBranch || selectedBranch).Address && (
                <p className="text-sm text-gray-600">{(hoveredBranch || selectedBranch).Address}</p>
              )}
              {(hoveredBranch || selectedBranch).BranchOfficeTiming && (
                <p className="text-sm text-gray-600">{formatTimings((hoveredBranch || selectedBranch).BranchOfficeTiming)}</p>
              )}
              {(hoveredBranch || selectedBranch).Message && (
                <p className="text-sm text-dollar-red mt-2">{(hoveredBranch || selectedBranch).Message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LocationModal
