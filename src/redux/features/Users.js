import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: usersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id)
    },

    updateUserName: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            userName: action.payload.userName
          };
        }
        return user;
      });
    }
  }
});

export default userSlice.reducer;

export const { addUser, deleteUser, updateUserName } = userSlice.actions;