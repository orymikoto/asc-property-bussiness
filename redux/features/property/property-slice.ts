import { T_Property } from "@/types/Model";
import { createSlice } from "@reduxjs/toolkit";

type T_Property_Initial_State = {
  property: T_Property;
  loading: boolean;
  error?: Error | null;
};

const initialState: T_Property_Initial_State = {
  property: {
    harga: 0,
    gambar: null,
    nama_property: "",
    alamat: "",
    fasilitas: {
      tempat_tidur: 0,
      kamar_mandi: 0,
      parkir_kendaraan: null,
    },
  },
  loading: false,
  error: null,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProperty, setLoading, setError } = propertySlice.actions;

export default propertySlice.reducer;
