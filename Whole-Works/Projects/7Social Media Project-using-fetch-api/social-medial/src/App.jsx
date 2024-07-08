import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import PostListProvider from "../src/store/post-list-stor";
import { useState } from "react";

function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
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
      </PostListProvider>
    </>
  );
}

export default App;
