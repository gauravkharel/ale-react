import pkg from "@reduxjs/toolkit";
const { createSlice, createAsyncThunk } = pkg;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// generate pending, fulfilled, rejected action types
//createAsynceThunk(action, callbackFunction)
export const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.data.map((user) => user.id));
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
