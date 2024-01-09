import "./App.css";
import AddPost from "./components/AddPost";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
      <SinglePost postId={1} />
      <AddPost />
    </>
  );
}

export default App;
