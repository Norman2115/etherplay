"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import TopBar from "~~/components/TopBar";
import { games } from "~~/constants/game";
import "~~/styles/globals.css";

export default function Page() {
  const { gameId } = useParams();
  const game = games.find(g => g.id === gameId);

  return (
    <>
      <TopBar />
      <div className="flex flex-row space-x-10 items-stretch justify-center bg-white bg-opacity-20 p-12 mt-32 mx-10 rounded-lg">
        <div className="w-1/3 flex items-center justify-center">
          <Image src={game?.vertical_image || ""} alt={game?.title || "Game Image"} width={300} height={300} />
        </div>
        <div className="w-2/3 min-h-full space-y-3 flex flex-col justify-between">
          <div className="flex flex-col space-y-5">
            <h1 className="text-4xl font-bold">{game?.title}</h1>
            <p className="text-2xl line-clamp-5 text-ellipsis">{game?.description}</p>
            <div className="flex items-center space-x-2 text-yellow-200">
              <FaStar size={32} />
              <FaStar size={32} />
              <FaStar size={32} />
              <FaStar size={32} />
              <FaStarHalf size={32} />
            </div>
            <div className="flex items-center">
              <p className="text-xl text-white bg-gray-300 bg-opacity-20 rounded-md px-4 py-2">{game?.genre}</p>
            </div>
            <p className="text-2xl">{game?.price}</p>
          </div>
          <div className="flex flex-row justify-end">
            <button className="bg-[#425dd3] text-2xl px-9 py-3 rounded-full">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
}
