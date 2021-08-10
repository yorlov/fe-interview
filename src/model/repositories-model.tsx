import {ReactNode} from "react";

export type GitHubMirror = {
    id: number
    project: {
        name: string
        projectUrl: string
    }
    repository: {
        name: string
        repositoryUrl: string
    }
    lastActivityAt: number
    refreshedAt: number
    gitHubUrl: string
};

export type RepositoriesProps = {
    isLoading: boolean
    repositories: GitHubMirror[]
    actions: ReactNode
    onRemove: () => void
}