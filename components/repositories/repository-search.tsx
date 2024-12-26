"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RepoSearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function RepoSearch({ searchValue, onSearchChange }: RepoSearchProps) {
  return (
    <div className="w-full border-b pb-4">
      <div className="w-80">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            className="pl-10 h-9"
            placeholder="Search Repositories"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
