import { AxiosRequest } from "../../AxiosConfig";
import { authSetState } from "./auth.slice";

export const loginAction = (loginData, navigate) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.post("auth/login", loginData);
    const { data: Data } = data;

    localStorage.setItem("authToken", Data.access_token);
    dispatch(authSetState({ key: "access_token", value: Data.access_token }));
    navigate("/blog/list");
    return data;
  } catch (error) {
    console.log(error);
  }
};
