import {GitHubMirror} from "@github-mirrors/model/repositories-model";
import {pageOf, items, delayed} from "@github-mirrors/providers/util";

const repositories: GitHubMirror[] = items(4).map(i => ({
    id: i,
    project: {
        name: 'google' + i,
        projectUrl: 'projects/google' + i
    },
    repository: {
        name: 'bamboo-soy' + i,
        repositoryUrl: 'projects/google' + i + '/repos/bamboo-soy' + i
    },
    lastActivityAt: 1589464616807,
    refreshedAt: 1589464616807,
    gitHubUrl: 'https://github.com/google/bamboo-soy' + i
}));

export const fetchGitHubMirrors = (params: { filter?: string, start: number }) => pageOf(repositories, params.start);

export const createNewMirror = (url: string) => delayed();

export const createNewMirrors = (url: string) => delayed();

export const removeMirror = (id: number) => delayed();