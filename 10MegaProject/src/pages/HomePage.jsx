import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { PostCard, Container } from "../components";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (userData) {
      appwriteService.getAllPosts().then((posts) => {
        if (posts) setPosts(posts.documents);
      });
    }
  }, []);

  if (!userData) {
    return (
      <div className="w-full py-8 mt-4 text-center ">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="flex flex-wrap">No any Posts</div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
