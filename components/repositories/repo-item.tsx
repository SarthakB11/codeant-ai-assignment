"use client";

import { Circle, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RepoItemProps {
  repoName: string;
  isRepoPublic: boolean;
  repoLanguage: string;
  repoSize: string;
  lastUpdated: string;
}

export function RepoItem({ repoName, isRepoPublic, repoLanguage, repoSize, lastUpdated }: RepoItemProps) {
  return (
    <div className="py-3 hover:bg-gray-50/80 cursor-pointer">
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{repoName}</span>
          <Badge variant={isRepoPublic ? "secondary" : "outline"} className="font-normal text-blue-500 bg-blue-50 border-blue-300 h-5">
            {isRepoPublic ? "Public" : "Private"}
          </Badge>
        </div>
        <div className="flex items-center space-x-6 text-sm text-gray-800">
          <div className="flex items-center space-x-1">
            <span>{repoLanguage}</span>
            <Circle className="h-1.5 w-1.5 fill-current text-blue-500" />
          </div>
          <div className="flex items-center space-x-1">
            <Database className="h-3 w-3" />
            <span>{repoSize}</span>
          </div>
          <span>Updated {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}