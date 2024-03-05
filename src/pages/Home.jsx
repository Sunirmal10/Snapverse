import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import LeftNavBar from "../components/LeftNavBar";
import RightBar from "../components/RightBar";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="flex bg-white dark:bg-[#151515] flex-col w-full xs:items-center">
      <Header />
      <main className="p-0 m-0 flex w-full justify-center md:justify-start md:gap-12">
        <LeftNavBar />
        <Main />
        <RightBar />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
