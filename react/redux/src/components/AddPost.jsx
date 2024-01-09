import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        body,
      })
    );

    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1>Add Post</h1>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body:</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit" onClick={handleAddPost}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
