import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currentState, action) {
  let newPostList = currentState;
  if (action.type === "Delete_Post") {
    newPostList = currentState.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentState];
  }
  return newPostList;
}

const values = [
  {
    id: "1",
    title: "Going To Peshawar",
    body: "Peshawar is a historic city in Pakistan, known for its rich culture, ancient architecture, and vibrant bazaars. It's a gateway to the Khyber Pass and has a diverse cultural heritage influenced by various civilizations.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },

  {
    id: "9",
    title: "Going To Peshawar",
    body: "Peshawar is a historic city in Pakistan, known for its rich culture, ancient architecture, and vibrant bazaars. It's a gateway to the Khyber Pass and has a diverse cultural heritage influenced by various civilizations.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduatiing", "Unbelieveable"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, values);
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
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
