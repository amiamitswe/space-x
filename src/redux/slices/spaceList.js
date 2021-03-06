import { createSlice } from "@reduxjs/toolkit";
import { listSpace } from "../actions/spaceList";

const initialState = {
   list: {
      data: [],
      loading: false,
      error: null
   }
};

const providerSlice = createSlice({
   name: 'spaceList',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            listSpace.pending,
            (state) => {
               state.list.loading = true;
               state.list.error = null;
            }
         )
         .addCase(
            listSpace.fulfilled,
            (state, action) => {
               state.list.loading = false;
               state.list.data = action.payload;
               state.list.error = null;
            }
         )
         .addCase(
            listSpace.rejected,
            (state, action) => {
               state.list.loading = false;
               state.list.error = action.error.message || 'something error';
            }
         );
   }
}
);

export default providerSlice;