import { useQuery } from 'react-query'
import { axios } from '../../../lib/axios'

export const loadRent = (id: string): Promise<any> => {
  return axios.get(`/rents/${id}`)
}

export function useLoadRent(query: any) {
  return useQuery(['rents', query], () => loadRent(query))
}
