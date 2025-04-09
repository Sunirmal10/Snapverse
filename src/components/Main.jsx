import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import AddPost from "./AddPost";

const Main = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      {/* <Stories /> */}
      <AddPost />
      <Posts />
    </div>
  );
};

export default Main;
