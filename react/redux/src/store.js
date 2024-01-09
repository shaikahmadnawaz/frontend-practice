import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export default store;
