import { useQuery } from "@tanstack/react-query"
import apiClient from "../api/client"

export const useBranches = (countryCode = "UAE") => {
  return useQuery({
    queryKey: ["branches", countryCode],
    queryFn: async () => {
      const response = await apiClient.get("/branch/all", {
        params: { countryCode },
      })
      const branches = response.data?.result || []
      
      const groupedByType = branches.reduce((acc, branch) => {
        const branchTypeName = branch.BranchType?.Name || "Other"
        if (!acc[branchTypeName]) {
          acc[branchTypeName] = {
            name: branchTypeName,
            branches: [],
          }
        }
        acc[branchTypeName].branches.push(branch)
        return acc
      }, {})
      
      return Object.values(groupedByType)
    },
  })
}

