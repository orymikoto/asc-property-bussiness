import { T_Property } from "@/types/Model";
import { createSlice } from "@reduxjs/toolkit";

type T_Property_Initial_State = {
  properties: Array<T_Property>;
  loading: boolean;
  error?: Error | null;
};

const initialState: T_Property_Initial_State = {
  properties: [],
  loading: false,
  error: null,
};

export const propertyListSlice = createSlice({
  name: "property_list",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProperties, setLoading, setError } =
  propertyListSlice.actions;

export default propertyListSlice.reducer;
