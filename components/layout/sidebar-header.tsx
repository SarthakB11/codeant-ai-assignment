"use client";

import Image from "next/image";

interface SidebarHeaderProps {
  isMobileView?: boolean;
  closeSidebar?: () => void;
}

export function SidebarHeader({ isMobileView }: SidebarHeaderProps) {
  if (isMobileView) {
    return (
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={30} height={30}/>
        <span className="font-light text-xl">CodeAnt AI</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="logo" width={30} height={30}/>
      <span className="font-light text-xl mt-1">CodeAnt AI</span>
    </div>
  );
}