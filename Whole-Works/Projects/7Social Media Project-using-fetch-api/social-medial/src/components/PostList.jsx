import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-stor";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handlePost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };
  return (
    <>
      {postList.length === 0 && <WelcomeMessage onGetPostsClick={handlePost} />}

      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
