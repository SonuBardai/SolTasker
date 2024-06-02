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
};

const initialState: UserStateType = {
  user: null,
  dashboardView: DashboardView.TaskPoster,
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDashboardView: (state, action) => {
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
