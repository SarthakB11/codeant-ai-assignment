"use client";

import { cn } from "@/lib/utils";
import { SidebarHeader } from "@/components/layout/sidebar-header";
import { SidebarNav } from "@/components/layout/sidebar-nav";

interface SidebarProps {
  isMobileView?: boolean;
  closeSidebar?: () => void;
}

export function Sidebar({ isMobileView, closeSidebar }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-full bg-white",
      isMobileView ? "p-4" : "w-64 border-r border-gray-100 p-4"
    )}>
      <div className="space-y-6 flex-1">
        <SidebarHeader isMobileView={isMobileView} closeSidebar={closeSidebar} />
        <SidebarNav />
      </div>
    </div>
  );
}