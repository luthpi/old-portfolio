import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const url = "https://dev.to/api/articles?username=luthpai";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setPosts(res.data));
  }, []);
  console.log(posts);
  return (
    <main className="flex flex-col gap-6 px-8 pb-16 md:px-20">
      <Header />
      <div className="flex flex-col flex-nowrap gap-3">
        {posts.map((post) => {
          return (
            <div className="flex w-full flex-col gap-2 rounded-xl bg-[#242424] p-3 text-white shadow-xl md:w-[45%]">
              <img src={post.cover_image} className="w-full rounded-xl" />
              <h1 className="mx-2 text-xl font-bold">{post.title}</h1>

              <div className="mx-2 flex flex-row gap-1">
                {post.tag_list.map((tag) => {
                  return (
                    <span className="inline rounded-full bg-[#303030] px-2 py-1">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="mx-2 flex items-center gap-2">
                <img
                  src={post.user.profile_image}
                  className="h-[24px] w-[24px] rounded-full bg-[#303030]"
                />
                <span>{post.user.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
