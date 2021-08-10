import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import CenteredSpinner from "@github-mirrors/util/centered-spinner";
import RepositoryRow from "@github-mirrors/components/repositories/repository-row";
import {RepositoriesProps} from "@github-mirrors/model/repositories-model";
import {PageHeader} from "@github-mirrors/components/common";

const RepositoriesList: FC<RepositoriesProps> = ({repositories, isLoading, actions, onRemove}) => (
    <Fragment>
        <PageHeader
            title={<h2>{I18n.getText('github.mirrors.configuration.repositories.title')}</h2>}
            description={<p>{I18n.getText('github.mirrors.configuration.repositories.description')}</p>}
            actions={actions}
        />
        <div className="repositories-list">
            <table className="aui paged-table">
                <thead>
                <tr>
                    <th scope="col" className="repositories-list-project">
                        {I18n.getText('github.mirrors.repositories.list.header.project')}
                    </th>
                    <th scope="col" className="repositories-list-repository">
                        {I18n.getText('github.mirrors.repositories.list.header.repository')}
                    </th>
                    <th scope="col" className="repositories-list-last-activity">
                        {I18n.getText('github.mirrors.repositories.list.header.last.activity')}
                    </th>
                    <th scope="col" className="repositories-list-last-refresh">
                        {I18n.getText('github.mirrors.repositories.list.header.last.refresh')}
                    </th>
                    <th scope="col" className="repositories-list-actions">
                        {I18n.getText('github.mirrors.repositories.list.header.actions')}
                    </th>
                </tr>
                </thead>
                <tbody>
                {repositories.map(mirror => <RepositoryRow key={mirror.gitHubUrl} {...mirror} onRemove={onRemove}/>)}
                </tbody>
            </table>

            {isLoading && <CenteredSpinner className="repositories-list-spinner"/>}
        </div>
    </Fragment>
);

export default RepositoriesList;