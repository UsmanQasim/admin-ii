import Axios from "axios";
import {
  FETCH_CONTACT_INQUIRIES_REQUEST,
  FETCH_CONTACT_INQUIRIES_SUCCESS,
  FETCH_CONTACT_INQUIRIES_FAILURE,
} from "./contactInquiryTypes";
import { API_KEY } from "../../utils/secrets";

export const fetchContactInquiries = () => {
  return (dispatch) => {
    dispatch(fetchContactInquiriesRequest());

    const reqURL =
      "/api/v1/contactInquiries/?contact_inquiries&api_key=" + API_KEY;

    Axios.get(reqURL)
      .then((response) => dispatch(fetchContactInquiriesSuccess(response.data)))
      .catch((error) => dispatch(fetchContactInquiriesFailure(error.message)));
  };
};

const fetchContactInquiriesRequest = () => ({
  type: FETCH_CONTACT_INQUIRIES_REQUEST,
});

const fetchContactInquiriesSuccess = (contactInquiries) => ({
  type: FETCH_CONTACT_INQUIRIES_SUCCESS,
  payload: contactInquiries,
});

const fetchContactInquiriesFailure = (error) => ({
  type: FETCH_CONTACT_INQUIRIES_FAILURE,
  payload: error,
});
