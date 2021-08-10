import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";

type Props = {
    openRepositoryImportDialog: () => void
    openOrganizationImportDialog: () => void
}

const ImportActions: FC<Props> = ({openRepositoryImportDialog, openOrganizationImportDialog}) => (
    <Fragment>
        <button className='aui-button aui-button-primary' onClick={openRepositoryImportDialog}>
            {I18n.getText('github.mirrors.configuration.repositories.add.repository.button.title')}
        </button>
        <button className='aui-button' onClick={openOrganizationImportDialog}>
            {I18n.getText('github.mirrors.configuration.repositories.import.organization.button.title')}
        </button>
    </Fragment>
)

export default ImportActions;