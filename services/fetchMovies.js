import { API_BASE_URL,API_KEY } from "@env";
import axios from 'axios';
import api_key from "../constants/apiKey";

export const fetchMovies = async (path) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${path}`, {
             headers: {
                Authorization:`Bearer ${api_key}`
             }
        });

        if(data) {
            return data.results;
        }

    } catch(err) {
        return err;
    }
}
