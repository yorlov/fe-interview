import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import CenteredSpinner from "@github-mirrors/util/centered-spinner";
import AccountRow from "@github-mirrors/components/accounts/account-row";
import {AccountsProps} from "@github-mirrors/model/accounts-model";
import {PageHeader} from "@github-mirrors/components/common";

const AccountsList: FC<AccountsProps> = ({isLoading, accounts, openAccountAddDialog, onRemove}) => (
    <Fragment>
        <PageHeader
            title={<h2>{I18n.getText('github.mirrors.configuration.accounts.title')}</h2>}
            actions={
                <button className='aui-button' onClick={openAccountAddDialog}>
                    {I18n.getText('github.mirrors.configuration.accounts.add.account.button.title')}
                </button>
            }
            description={
                <p>
                    {I18n.getText('github.mirrors.configuration.accounts.description')}
                    {'\u00A0'}
                    <a href='https://developer.github.com/v3/#rate-limiting'>
                        {I18n.getText('github.mirrors.learn.more.title')}
                    </a>
                </p>
            }
        />
        <div className="accounts-list">
            <table className="aui paged-table">
                <thead>
                <tr>
                    <th scope="col" className="accounts-list-name">
                        {I18n.getText('github.mirrors.accounts.list.header.name')}
                    </th>
                    <th scope="col" className="accounts-list-actions">
                        {I18n.getText('github.mirrors.accounts.list.header.actions')}
                    </th>
                </tr>
                </thead>
                <tbody>
                {accounts.map(account => <AccountRow key={account.profileUrl} onRemove={onRemove} {...account}/>)}
                </tbody>
            </table>

            {isLoading && <CenteredSpinner className="accounts-list-spinner"/>}
        </div>
    </Fragment>
);

export default AccountsList;