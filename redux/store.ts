import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./features/property/property-slice";
import propertyListReducer from "./features/property/property_list-slice";

export const store = configureStore({
  reducer: {
    propertyReducer,
    propertyListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
