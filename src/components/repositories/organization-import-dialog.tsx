import Dialog from "@github-mirrors/util/dialog";
import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import {TextField} from "@github-mirrors/util/form";
import {ActionFormProps} from "@github-mirrors/model/common";

const OrganizationImportDialog: FC<ActionFormProps> = ({onAction, onCancel, onChange, isActionDisabled, isInputDisabled, errors}) => (
    <Dialog onClose={onCancel}
            titleContent={I18n.getText('github.mirrors.repositories.import.organization.dialog.title')}
            footerActionContent={
                <Fragment>
                    <button className='aui-button aui-button-primary' disabled={isActionDisabled} onClick={onAction}>
                        {I18n.getText('github.mirrors.repositories.import.organization.dialog.button.import.title')}
                    </button>
                    <button className='aui-button aui-button-link' onClick={onCancel}>
                        {I18n.getText('github.mirrors.repositories.import.organization.dialog.button.cancel.title')}
                    </button>
                </Fragment>
            }>
        <form className="aui">
            <TextField required
                       autoFocus={true}
                       autoComplete={false}
                       disabled={isInputDisabled}
                       onChange={onChange}
                       name="organization"
                       size="medium-long"
                       errors={errors}
                       title={I18n.getText('github.mirrors.repositories.import.organization.form.field.title')}
                       description={I18n.getText('github.mirrors.repositories.import.organization.form.field.description')}
            />
        </form>
    </Dialog>
);

export default OrganizationImportDialog;