import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SearchProvider } from "./context/SearchContext.jsx"
import QueryProvider from "./providers/QueryProvider"
import Navbar from "./components/shared/Navbar"
import TabsSection from "./features/search/TabsSection"
import VehicleListing from "./features/vehicle-listing/VehicleListing"

const App = () => {
  return (
    <QueryProvider>
      <SearchProvider>
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main className="min-h-screen bg-white">
                <Navbar />
                <TabsSection />
              </main>
            }
          />
          <Route
            path="/vehicle-listing"
            element={
              <main className="min-h-screen bg-white">
                <Navbar />
                <VehicleListing />
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      </SearchProvider>
    </QueryProvider>
  )
}

export default App
