export type RateLimitStatus = {
    limit: number
    remaining: number
    reset: number
}

export type GitHubAccount = {
    id: number
    avatarUrl: string
    profileUrl: string
    displayName: string
    rateLimitStatus: RateLimitStatus
};

export type AccountsProps = {
    isLoading: boolean
    accounts: GitHubAccount[]
    openAccountAddDialog: () => void
    onRemove: () => void
}