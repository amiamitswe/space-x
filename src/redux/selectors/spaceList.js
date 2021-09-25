import { createSelector } from "@reduxjs/toolkit";

export const selectSpaceList = createSelector(
   (state) => state.spaceList,
   spaceList => spaceList.list.data
);

export const selectSpaceListLoading = createSelector(
   (state) => state.spaceList,
   spaceList => spaceList.list.loading
);

export const selectSpaceListError = createSelector(
   (state) => state.spaceList,
   spaceList => spaceList.list.error
);