"use client";

import React, { useState, useEffect } from "react";

export const Torii = () => {
  const [feed, setFeed] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed((prevFeed) => [
        ...prevFeed,
        `Katana ${new Date().toLocaleTimeString()}`,
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeed((prevFeed) => [...prevFeed, inputValue]);
    setInputValue("");
  };

  return (
    <div className=" text-white bg-dojo-red-400 h-full p-8 flex justify-center hover:bg-red-900/60 transition-all duration-300 cursor-pointer rounded-xl border-black border-2">
      <div className="text-center self-center">
        <h1>Automatic Indexing</h1>
        <div className="text-xl">Blazingly Fast</div>
      </div>
    </div>
  );
};
