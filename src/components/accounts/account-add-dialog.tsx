import Dialog from "@github-mirrors/util/dialog";
import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import {TextField} from "@github-mirrors/util/form";
import {ActionFormProps} from "@github-mirrors/model/common";

const AccountAddDialog: FC<ActionFormProps> = ({onAction, onCancel, onChange, isActionDisabled, isInputDisabled, errors}) => (
    <Dialog onClose={onCancel}
            titleContent={I18n.getText('github.mirrors.accounts.add.account.dialog.title')}
            footerActionContent={
                <Fragment>
                    <button className='aui-button aui-button-primary' disabled={isActionDisabled} onClick={onAction}>
                        {I18n.getText('github.mirrors.accounts.add.account.dialog.button.add.title')}
                    </button>
                    <button className='aui-button aui-button-link' onClick={onCancel}>
                        {I18n.getText('github.mirrors.accounts.add.account.dialog.button.cancel.title')}
                    </button>
                </Fragment>
            }>
        <form className="aui">
            <TextField required
                       autoFocus={true}
                       autoComplete={false}
                       disabled={isInputDisabled}
                       onChange={onChange}
                       name="account"
                       size="medium-long"
                       errors={errors}
                       title={I18n.getText('github.mirrors.accounts.add.account.form.field.title')}
                       description={
                           <Fragment>
                               {I18n.getText('github.mirrors.accounts.add.account.form.field.description')}
                               {'\u00A0'}
                               <a href='https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token'>
                                   {I18n.getText('github.mirrors.learn.more.title')}
                               </a>
                           </Fragment>
                       }
            />
        </form>
    </Dialog>
);

export default AccountAddDialog;