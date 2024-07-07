import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListContextProvider from "./store/post-list-stort";

function App() {
  const [selectTab, setTab] = useState("Home");
  return (
    <>
      <PostListContextProvider>
        <div className="main-class">
          <SideBar selectTab={selectTab} setTab={setTab}></SideBar>
          <div className="content">
            <Header></Header>

            {selectTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListContextProvider>
    </>
  );
}

export default App;
