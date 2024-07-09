import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-stor";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleEvent = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtag = hashtagsElement.current.value.split(" ");
    userIdElement.current.value = " ";
    titleElement.current.value = " ";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    hashtagsElement.current.value = "";
    addPost(userId, title, body, reactions, hashtag);
  };
  return (
    <form className="create-post " onSubmit={handleEvent}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Enter your user id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="id"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter your user id here
        </label>
        <textarea
          rows={4}
          ref={bodyElement}
          className="form-control"
          id="body"
          placeholder="Tell use more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control"
          id="hashtags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
