import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";

type User = {
  public_key: string;
};

export enum DashboardView {
  Tasker = "tasker",
  TaskPoster = "task_poster",
}

type UserStateType = {
  user: User | null;
  dashboardView: DashboardView;
  loading: boolean;
};

const initialState: UserStateType = {
  user: null,
  dashboardView: (localStorage.getItem("dashboardView") as DashboardView) || DashboardView.TaskPoster,
  loading: false,
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDashboardView: (state, action) => {
      localStorage.setItem("dashboardView", action.payload);
      state.dashboardView = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser, setDashboardView } = userSlice.actions;
export default userSlice.reducer;
