"use client";

import { RepoItem } from "@/components/repositories/repo-item";
import { Repo } from "@/types/repository";

interface RepoListProps {
  repoList: Repo[];
}

export function RepoList({ repoList }: RepoListProps) {
  return (
    <div className="divide-y divide-gray-200 ">
      {repoList.map((repo) => (
        <RepoItem
          key={repo.name}
          repoName={repo.name}
          isRepoPublic={repo.isPublic}
          repoLanguage={repo.language}
          repoSize={repo.size}
          lastUpdated={repo.updatedAt}
        />
      ))}
    </div>
  );
}
