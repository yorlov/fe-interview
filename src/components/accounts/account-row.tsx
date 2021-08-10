import * as React from "react";
import {FC, useEffect} from "react";
import {GitHubAccount} from "@github-mirrors/model/accounts-model";
import {I18n} from "@atlassian/wrm-react-i18n";
import {useRest} from "@github-mirrors/hooks/use-rest";
import {removeAccount} from "@github-mirrors/providers/accounts-provider";

const AccountRow: FC<GitHubAccount & { onRemove: () => void; }> = ({id, displayName, onRemove}) => {
    const {send, wasLoaded} = useRest(removeAccount);

    useEffect(() => {
        if (wasLoaded) {
            onRemove();
        }
    }, [wasLoaded]);

    return (
        <tr className="account-row">
            <td>{displayName}</td>
            <td>
                <a href='#' onClick={() => send(id)}>
                    {I18n.getText('github.mirrors.accounts.list.row.remove')}
                </a>
            </td>
        </tr>
    );
};

export default AccountRow;