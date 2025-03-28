"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative border flex items-center justify-start bg-white px-[15px] py-[10px]">
      <Image src="https://i.imgur.com/Ln5hUwG.png" width={230} height={28} className="w-[140px]" alt="logo" />
    </div>
  );
}
