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
    <main className="flex w-full flex-col items-center gap-6 px-5 pb-16 text-white md:px-20">
      <Header />
      <div className="flex w-full flex-col flex-nowrap items-center gap-3 md:flex-row md:items-start md:justify-center">
        {posts.map((post) => {
          return (
            <div className="animate__animated animate__fadeInRight animate__faster flex w-full flex-col gap-2 rounded-xl bg-[#242424] px-3 py-4 text-white shadow-xl md:w-[45%]">
              <img src={post.cover_image} className="w-full rounded-md" />
              <h1 className=" text-xl font-bold">{post.title}</h1>
              <div className=" flex flex-row gap-1">
                {post.tag_list.map((tag) => {
                  return (
                    <span className="inline rounded-full bg-[#303030] px-3 py-1 text-[14px] md:text-[16px]">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <span className="ml-2 text-[15px] text-gray-200">
                Posted on{" "}
                <span className="font-bold text-white">
                  {post.readable_publish_date}
                </span>
              </span>
              <div className=" flex items-center gap-2">
                <img
                  src={post.user.profile_image}
                  className="h-[28px] w-[28px] rounded-full bg-[#303030]"
                />
                <span className="text-sm">
                  {post.user.name}{" "}
                  <span className="text-sm font-extralight text-gray-400">
                    on dev.to
                  </span>
                </span>
              </div>
              <p className="text-[16px] font-extralight text-gray-200">
                {post.description}
              </p>
              <a
                target="_blank"
                href={post.url}
                className="btn  mt-3 w-fit text-xl"
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
