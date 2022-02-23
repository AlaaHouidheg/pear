import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  orderD: {
    items: [],
  },
};

export const postorder = createAsyncThunk("order/add", async (order) => {
  try {
    let result = axios.post("http://localhost:5000/order/", order);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getorders = createAsyncThunk("order/get", async () => {
  try {
    let result = axios.post("http://localhost:5000/order/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteorder = createAsyncThunk("order/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/order/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [postorder.pending]: (state) => {
      state.status = "pending";
    },
    [postorder.fulfilled]: (state, action) => {
      state.status = "fulfilled";
    },
    [postorder.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
