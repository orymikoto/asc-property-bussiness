import { T_Comment } from "@/types/Model";
import { createSlice } from "@reduxjs/toolkit";

type T_Property_Initial_State = {
  comment: T_Comment;
  loading: boolean;
  error?: Error | null;
};

const initialState: T_Property_Initial_State = {
  comment: {
    komentar: "",
    foto_profil: undefined,
    nama: "",
    pekerjaan: "",
  },
  loading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setComment, setLoading, setError } = commentSlice.actions;

export default commentSlice.reducer;
