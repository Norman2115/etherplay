"use client";

// import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
// import { Address } from "~~/components/scaffold-eth";
// import GameCard from "~~/components/GameCard";
import GameSection from "~~/components/GameSection";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ToolBar from "~~/components/ToolBar";
import TopBar from "~~/components/TopBar";
import "~~/styles/globals.css";

// import { Header } from "~~/components/Header";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <TopBar />
      <ToolBar />
      <GameSection />
    </>
  );
};

export default Home;
