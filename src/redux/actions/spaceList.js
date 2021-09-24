import { createAsyncThunk } from "@reduxjs/toolkit";
import SpaceX_API from "../../api/spacex";

export const listSpace = createAsyncThunk(
   'listSpace',
   async (payload) => {
      const { limit } = payload;

      const response = await SpaceX_API.spaceList({ limit });
      console.log(await response);
      return await response.data;
   }
);