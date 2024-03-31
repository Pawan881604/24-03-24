import axios from "axios";
import {
  SEO_CLEAR_SEO,
  SEO_FAIL,
  SEO_REQUEST,
  SEO_SUCCESS,
} from "../constants/SeoConstants";
import { server_url } from "../utils/Url";
import { get_headers } from "../utils/Headers";

export const getAllSeo = () => async (dispatch) => {
  try {
    dispatch({ type: SEO_REQUEST });
    const { data } = await axios.get(`${server_url()}/api/v1/all-seo`, get_headers());
    dispatch({ type: SEO_SUCCESS, payload: data.seo });
  } catch (error) {
    dispatch({ type: SEO_FAIL, payload: error.response.data.message });
  }
};

export const seoClearError = () => async (dispatch) => {
  dispatch({ type: SEO_CLEAR_SEO });
};
