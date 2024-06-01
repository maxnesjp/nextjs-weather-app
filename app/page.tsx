import Link from "next/link";
import React from "react";
import Footer from "./components/layout/footer";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <h1>
          Welcome to maxterious dummy weather app built using react, nextjs,
          typescript, tailwind and weather api
        </h1>
      </div>
      <div className="mt-5">
        <Link href="/weather" className="border-2 p-3 rounded-md">
          See the weather
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
