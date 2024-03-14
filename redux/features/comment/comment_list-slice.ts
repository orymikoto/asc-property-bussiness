import { T_Comment } from "@/types/Model";
import { createSlice } from "@reduxjs/toolkit";

type T_Property_Initial_State = {
  comments: Array<T_Comment>;
  loading: boolean;
  error?: Error | null;
};

const initialState: T_Property_Initial_State = {
  comments: [],
  loading: false,
  error: null,
};

export const commentListSlice = createSlice({
  name: "comment_list",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setComments, setLoading, setError } = commentListSlice.actions;

export default commentListSlice.reducer;
