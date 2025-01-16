import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/siddheshpotdar2003")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  const data = useLoaderData();

  return (
    <section className="bg-gray-50 py-16 flex items-center justify-center flex-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Left Section: Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={data && data.avatar_url}
            alt="GitHub Profile"
            className="rounded-full shadow-lg w-48 h-48 object-cover"
          />
        </div>

        {/* Right Section: Followers */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            GitHub Followers
          </h2>
          <p className="text-gray-700 text-lg">
            <span className="text-4xl font-bold text-teal-600">
              {data && data.followers}
            </span>{" "}
            followers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/siddheshpotdar2003"
  );
  return response.json();
};
