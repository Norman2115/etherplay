import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  id: string;
  image: string;
  title: string;
  genre: string;
  price: string;
}

export default function GameCard({ id, image, title, genre, price }: GameCardProps) {
  return (
    <Link href={`/games/${id}`} passHref>
      <div className="w-72 h-96 bg-white bg-opacity-20 rounded-lg shadow-lg">
        <div className="relative w-full h-3/5">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <div className="flex flex-col space-y-3 p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-white">{price}</p>
          <div className="flex items-center">
            <p className="text-sm text-white bg-gray-300 bg-opacity-20 rounded-md px-3 py-1">{genre}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
