import { useQuery } from "@tanstack/react-query"
import { getTodosIds } from "./api"

//@ts-ignore
export function useTodosIds(){
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosIds,
        refetchOnWindowFocus: false
        // enabled: 
    })
}