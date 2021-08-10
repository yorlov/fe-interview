export type RequestProvider<T> = (params: any) => Promise<T>

export type Page<T> = {
    values: T[]
    isLastPage: boolean
    limit: number
    nextPageStart?: number
}

export type ActionFormProps = {
    onAction: () => void
    onCancel: () => void
    onChange: (e: any) => void
    isActionDisabled: boolean
    isInputDisabled: boolean
    errors: string[]
}

export type ActionDialogProps = {
    isDialogOpen: boolean
    openDialog: () => void
}

export type SimpleAction = ActionDialogProps & ActionFormProps & { isComplete: boolean }