import * as React from "react";
import {Fragment, useCallback} from "react";
import RepositoriesList from "@github-mirrors/components/repositories/repositories-list";
import {usePagedRest} from "@github-mirrors/hooks/use-paged-rest";
import {fetchGitHubMirrors} from "@github-mirrors/providers/repositories-provider";
import RepositoryImportDialog from "@github-mirrors/components/repositories/repository-import-dialog";
import CenteredSpinner from "@github-mirrors/util/centered-spinner";
import InfiniteScroller from "@github-mirrors/util/infinite-scroller";
import EmptyRepositories from "@github-mirrors/components/repositories/repositories-empty";
import useRepositoryImport from "@github-mirrors/hooks/use-repository-import";
import useOrganizationImport from "@github-mirrors/hooks/use-organization-import";
import OrganizationImportDialog from "@github-mirrors/components/repositories/organization-import-dialog";
import ImportActions from "@github-mirrors/components/repositories/import-actions";

const RepositoriesPage = () => {
    const {isLoading, loadNextPage, reset, wasLoaded, isLastPage, response: repositories} = usePagedRest(fetchGitHubMirrors);
    const onFetch = useCallback(() => loadNextPage(), [loadNextPage]);

    const repositoryImport = useRepositoryImport(reset);
    const organizationImport = useOrganizationImport(reset);

    const actions = (
        <ImportActions
            openRepositoryImportDialog={repositoryImport.openDialog}
            openOrganizationImportDialog={organizationImport.openDialog}
        />
    );

    const content = repositories ? (
        <RepositoriesList actions={actions} repositories={repositories} isLoading={isLoading} onRemove={reset}/>
    ) : wasLoaded ? (
        <EmptyRepositories actions={actions}/>
    ) : (
        <CenteredSpinner className="repositories-spinner"/>
    );

    return (
        <Fragment>
            {content}
            <InfiniteScroller onFetch={onFetch} isFetching={isLoading || isLastPage}/>
            {repositoryImport.isDialogOpen && <RepositoryImportDialog {...repositoryImport.formProps}/>}
            {organizationImport.isDialogOpen && <OrganizationImportDialog {...organizationImport.formProps}/>}
        </Fragment>
    );
};

export default RepositoriesPage;