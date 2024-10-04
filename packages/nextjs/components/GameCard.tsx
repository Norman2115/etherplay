import React from "react";
import Image from "next/image";

interface GameCardProps {
  image: string;
  title: string;
  genre: string;
  price: string;
}

export default function GameCard({ image, title, genre, price }: GameCardProps) {
  return (
    <div className="w-72 h-96 bg-white bg-opacity-20 rounded-lg shadow-lg">
      <div className="relative w-full h-3/5">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="flex flex-col space-y-3 p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{price}</p>
        <p className="text-sm text-gray-400">{genre}</p>
      </div>
    </div>
  );
}
