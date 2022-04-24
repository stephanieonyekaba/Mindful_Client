import apiUrl from '../apiConfig'
import axios from 'axios'

//index function 
export const getAllYogas = () => {
    return axios(`${apiUrl}/yogas`)
}