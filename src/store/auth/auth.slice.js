import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    authSetState: (state, { payload }) => {
      if (Array.isArray(payload)) {
        for (const item of payload) {
          _.set(state, item.key, item.value);
        }
      } else {
        _.set(state, payload.key, payload.value);
      }
    },
  },
});

export const { authSetState } = authSlice.actions;
export default authSlice.reducer;
