"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Leaderboard from "@/components/RankList";
export default function SendRedEnvelope() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加发送红包的逻辑
  };

  const leaderboardData = [
    {
      id: "0xbbb7418f361f7e7f217e177dc76420c275c27ed101a3ed1e3c15a9e9dd3d6983",
      name: "Elemen",
      amount: 1000,
    },
    {
      id: "0xbbb7418f361f7e7f217e177dc76420c275c27ed101a3ed1e3c15a9e9dd3d6983",
      name: "Elemen",
      amount: 1000,
    },
    {
      id: "0xbbb7418f361f7e7f217e177dc76420c275c27ed101a3ed1e3c15a9e9dd3d6983",
      name: "Elemen",
      amount: 1000,
    },
    {
      id: "0xbbb7418f361f7e7f217e177dc76420c275c27ed101a3ed1e3c15a9e9dd3d6983",
      name: "Elemen",
      amount: 1000,
    },
    {
      id: "0xbbb7418f361f7e7f217e177dc76420c275c27ed101a3ed1e3c15a9e9dd3d6983",
      name: "Elemen",
      amount: 1000,
    },
  ];

  return (
    <main
      className="flex min-h-screen flex-col items-center p-8 space-y-10 "
      style={{ backgroundImage: "url(/bg.png)" }}
    > 
      <div className="flex justify-between h-full space-x-10">
        <div className="w-full w-2/3 p-4">
        <div className="flex justify-between items-start mb-4">
          <Link
            href="/open"
            className="text-center py-2 px-4 border border-red-300 rounded-md shadow-sm text-m font-DynaPuff text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Claim
          </Link>
          <Link
            href="/profile"
            className="py-2 px-4 border border-red-300 rounded-md shadow-sm text-m font-DynaPuff text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Profile
          </Link>
      </div>
      
      <div className="w-full w-2/3 bg-white rounded-2xl p-4">
          <div className="text-center py-4 ">
            <h1 className="text-[20px] text-red-600 font-DynaPuff">
              Begin to pary for blessing !
            </h1>
            <Image
              src="/god.png"
              alt="红包"
              width={140}
              height={100}
              className="mx-auto mt-2 rounded-lg"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-DynaPuff text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="mt-1 w-full rounded-md border-red-500 bg-red-100 text-black font-DynaPuff shadow-sm test-xs"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-DynaPuff text-white bg-red-600 hover:bg-red-700 "
            >
              Send 1 Sui
            </button>
          </form>
        </div>
        </div>
        <div className="w-1/3 bg-gray-100">
          <Leaderboard items={leaderboardData} />
        </div>
      </div>
    </main>
  );
}
