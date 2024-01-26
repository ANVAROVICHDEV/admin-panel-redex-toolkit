import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	article: [],
	error: null,
};

export const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		articleStart: (state) => {
			state.isLoading = true;
		},
		articleSuccess: (state, actions) => {
			state.isLoading = false;
			state.article = actions.payload;
		},
		articleFailture: (state, actions) => {
			state.isLoading = false;
			state.error = actions.payload;
		},
	},
});
export const { articleStart, articleSuccess, articleFailture } =
	articleSlice.actions;
export default articleSlice.reducer;
