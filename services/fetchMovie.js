import { API_BASE_URL, API_KEY } from "@env";
import api_key from "../constants/apiKey";
import axios from "axios";

export const fetchMovie = async (path) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    });

    if (data) {
      return data;
    }
  } catch (err) {
    return err;
  }
};

export const fetchMovieCredit = async (path) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    });
  } catch (err) {
    return err;
  }
};

export const fetchMovieGenre = async () => {};

export const fetchSimilarityMovie = async () => {};
