import {GitHubAccount} from "@github-mirrors/model/accounts-model";
import {pageOf, items, delayed} from "@github-mirrors/providers/util";

const remaining = (limit: number) => Math.floor(Math.random() * limit) + 1;

const accounts: GitHubAccount[] = items(4).map(i => ({
    id: i,
    avatarUrl: 'https://avatars1.githubusercontent.com/u/29731446?v=4',
    profileUrl: 'https://github.com/denzelws' + i,
    displayName: 'denzelws' + i,
    rateLimitStatus: {
        limit: 5000,
        remaining: remaining(5000),
        reset: 1589464616807
    }
}));

export const fetchGitHubAccounts = (params: { start: number }) => pageOf(accounts, params.start);

export const createNewAccount = (token: string) => delayed();

export const removeAccount = (id: number) => delayed();