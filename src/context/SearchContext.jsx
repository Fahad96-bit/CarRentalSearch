import { useState } from "react"
import { SearchContext } from "./searchContext"

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null)

  const updateSearchData = (data) => {
    setSearchData(data)
  }

  return (
    <SearchContext.Provider value={{ searchData, updateSearchData }}>
      {children}
    </SearchContext.Provider>
  )
}

