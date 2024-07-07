import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentValue, action) => {
  return [];
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

  const addPost = () => {};
  const deletePost = () => {};
  return (
    <>
      <PostList.Provider
        value={{
          postList,
          addPost,
          deletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};
let defaultPostList = [
  {
    id: "1",
    title: "Going To Peshawar",
    body: "Hi Friends, I am going to Peshawar for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 15,
    userId: "user-10",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },

  {
    id: 2,
    title: "Going To Islamabad",
    body: "Hi Friends, I am going to Islamabad for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 25,
    userId: "user-15",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
];
export default PostListContextProvider;
