import * as React from "react";
import {Fragment, useCallback, useEffect} from "react";
import AccountsList from "@github-mirrors/components/accounts/accounts-list";
import AccountAddDialog from "@github-mirrors/components/accounts/account-add-dialog";
import {usePagedRest} from "@github-mirrors/hooks/use-paged-rest";
import {createNewAccount, fetchGitHubAccounts} from "@github-mirrors/providers/accounts-provider";
import useSimpleAction from "@github-mirrors/hooks/use-simple-action";
import EmptyAccounts from "@github-mirrors/components/accounts/accounts-empty";
import CenteredSpinner from "@github-mirrors/util/centered-spinner";
import InfiniteScroller from "@github-mirrors/util/infinite-scroller";

const AccountsPage = () => {
    const {isDialogOpen, openDialog, isComplete, ...addFormProps} = useSimpleAction(createNewAccount);

    const {isLoading, loadNextPage, isLastPage, wasLoaded, reset, response: accounts} = usePagedRest(fetchGitHubAccounts);
    const onFetch = useCallback(() => loadNextPage(), [loadNextPage]);

    useEffect(() => {
        if (isComplete) {
            reset();
        }
    }, [isComplete]);

    const content = accounts ? (
        <AccountsList openAccountAddDialog={openDialog} accounts={accounts} isLoading={isLoading} onRemove={reset}/>
    ) : wasLoaded ? (
        <EmptyAccounts openAccountAddDialog={openDialog}/>
    ) : (
        <CenteredSpinner className="accounts-spinner"/>
    );

    return (
        <Fragment>
            {content}
            <InfiniteScroller onFetch={onFetch} isFetching={isLoading || isLastPage}/>
            {isDialogOpen && <AccountAddDialog {...addFormProps}/>}
        </Fragment>
    );
};

export default AccountsPage;