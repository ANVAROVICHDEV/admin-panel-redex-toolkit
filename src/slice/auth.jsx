import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signuserStart: (state) => {
			state.isLoading = true;
		},
		signuserSuccess: (state, actions) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = actions.payload
			setItem('token' , actions.payload.token)
		},
		signuserFailture: (state, actions) => {
			state.isLoading = false;
			state.error = actions.payload
		},

		logoutUser: state => {
			state.user = null
			state.loggedIn = false
		}
	},
});
export const { signuserStart, signuserSuccess, signuserFailture , logoutUser} =
	authSlice.actions;

export default authSlice.reducer;
