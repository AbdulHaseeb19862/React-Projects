import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-stor";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpanner from "./LoadingSpanner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("I am clean Up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpanner />}

      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
