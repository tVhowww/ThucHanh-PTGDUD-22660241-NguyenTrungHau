import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { result: 0 },
  reducers: {
    cong: (state) => {
      state.result += 1;
    },
    tru: (state) => {
      state.result -= 1;
    },
  },
});

export const { cong, tru } = counterSlice.actions;
export default counterSlice.reducer;
