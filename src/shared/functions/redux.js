export const loadingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

export const errorReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
