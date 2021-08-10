// @ts-ignore
import Illustration from "@github-mirrors/images/empty-accounts.svg";
import * as React from "react";
import {FC, Fragment} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import {PageHeader} from "@github-mirrors/components/common";
import Centered from "@github-mirrors/util/centered";

type Props = {
    openAccountAddDialog: () => void
}

const EmptyPage: FC<Props> = ({openAccountAddDialog}) => (
    <Fragment>
        <PageHeader title={<h2>{I18n.getText('github.mirrors.configuration.accounts.title')}</h2>}/>
        <Centered>
            <img src={Illustration} alt="" style={{height: '200px', margin: '20px 0 20px'}}/>
        </Centered>
        <Centered>
            <button className='aui-button aui-button-primary' onClick={openAccountAddDialog}>
                {I18n.getText('github.mirrors.configuration.accounts.add.account.button.title')}
            </button>
        </Centered>
    </Fragment>
)

export default EmptyPage;