import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/posts/postsSlice";

// eslint-disable-next-line react/prop-types
const SinglePost = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.currentPost);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h2>Single Post</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading post: {post.error}</p>}
      {status === "succeeded" && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
