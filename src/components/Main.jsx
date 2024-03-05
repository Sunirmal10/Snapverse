import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <Stories />
      <Posts />
    </div>
  );
};

export default Main;
