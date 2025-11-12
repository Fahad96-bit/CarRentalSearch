import { Menu } from "lucide-react"
import dollarLogo from "../../assets/dollar-logo.svg"

const Navbar = () => {
  return (
    <nav className="w-full bg-white" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, .2)' }}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center">
            <img 
              src={dollarLogo} 
              alt="dollar. CAR RENTAL" 
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-dollar-red transition-colors">
            Offers
          </a>
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-dollar-red transition-colors">
            Teachers Offer
          </a>
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm font-medium text-dollar-red hover:text-[#c0152d] transition-colors">
              Personal Lease
            </a>
            <span className="bg-dollar-red text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
          </div>
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-dollar-red transition-colors">
            Business Leasing
          </a>
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-dollar-red transition-colors">
            Dollar Prestige
          </a>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-dollar-red hover:text-[#c0152d] transition-colors">
            Login
          </a>
          <button className="bg-dollar-red hover:bg-[#c0152d] text-white font-semibold px-6 py-2 rounded-md text-sm uppercase transition-colors">
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
