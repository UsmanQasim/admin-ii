import Axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
import { API_KEY } from "../../utils/secrets";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    const reqURL = "/api/v1/users/?users&api_key=" + API_KEY;

    Axios.get(reqURL)
      .then((response) => dispatch(fetchUsersSuccess(response.data)))
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
