import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { FaDev } from "react-icons/fa";

const url = "https://dev.to/api/articles?username=luthpai";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setPosts(res.data));
  }, []);

  return (
    <main className="flex w-full flex-col items-center gap-6 px-5 text-white md:px-20">
      <Header />
      <div className="flex w-full flex-col flex-nowrap items-center gap-3 md:flex-row md:items-start md:justify-center">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="animate__animated animate__fadeInRight animate__faster flex w-full flex-col gap-2 rounded-xl bg-[#242424] px-5 py-4 text-white shadow-xl md:w-[45%]"
            >
              <h1 className=" text-xl font-bold">{post.title}</h1>
              <div className=" flex flex-row gap-1">
                {post.tag_list.map((tag) => {
                  return (
                    <span className=" rounded-full bg-[#303030] px-3 py-1 text-[14px] md:text-[16px]">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <span className="ml-1 text-[15px] text-gray-200">
                Posted on{" "}
                <span className="font-bold text-white">
                  {post.readable_publish_date}
                </span>
              </span>
              <div className="ml-2 flex items-center gap-2">
                Written By :
                <span className="text-sm">
                  {post.user.name}{" "}
                  <span className="text-sm font-extralight text-gray-400">
                    on dev.to
                  </span>
                </span>
              </div>
              <a
                target="_blank"
                href={post.url}
                className="btn mt-1 w-fit text-xl"
              >
                Read on
                <FaDev className="custom-transition text-xl" />
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
