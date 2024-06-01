"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "./components/layout/footer";
import { redirect } from "next/navigation";

const HomePage = () => {
  useEffect(() => {
    redirect(`/weather`);
  }, []);

  return <></>;
};

export default HomePage;
