import { Me } from "@/components/me";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-300 font-[SF Pro]">
      {/* Main heading */}
      <h1 className="text-xl font-semibold text-center mb-2">
        Welcome to Pool Bets!
        <br />
        Where You Bet,
      </h1>
      {/* Image above the main heading */}
      <Image
        src="up_header.svg"
        alt="Header Image"
        width={200}
        height={150}
        className="mb-8 mt-8"
      />

      {/* Gradient middle text */}
      <h2 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
        Thrill, Fun, Challenge
      </h2>

      {/* Image below the main heading */}
      <Image
        src="down_header.svg"
        alt="Header Image"
        width={200}
        height={150}
        className="mb-8 mt-8"
      />

      {/* Subtitle text */}
      <p className="text-lg text-center mb-8">
        All that for Free and with a <br />
        Big Bonus for You!
      </p>

      {/* "Create your bet" button */}
      <button className="px-6 py-3 text-lg font-semibold text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
        Create your bet
      </button>
    </div>
  );
}
