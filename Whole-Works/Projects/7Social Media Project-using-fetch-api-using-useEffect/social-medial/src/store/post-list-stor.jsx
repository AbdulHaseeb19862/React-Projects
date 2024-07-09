import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

function postListReducer(currentState, action) {
  let newPostList = currentState;
  if (action.type === "Delete_Post") {
    newPostList = currentState.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Initial_Posts") {
    newPostList = action.payload.posts;
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentState];
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, title, body, reactions, hashtag) => {
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: hashtag,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "Add_Initial_Posts",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
