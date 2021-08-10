// @ts-ignore
import Illustration from "@github-mirrors/images/empty-repositories.svg";
import * as React from "react";
import {FC, Fragment, ReactNode} from "react";
import {I18n} from "@atlassian/wrm-react-i18n";
import {PageHeader} from "@github-mirrors/components/common";
import Centered from "@github-mirrors/util/centered";

type Props = {
    actions: ReactNode
}

const EmptyPage: FC<Props> = ({actions}) => (
    <Fragment>
        <PageHeader title={<h2>{I18n.getText('github.mirrors.configuration.repositories.title')}</h2>}/>
        <Centered>
            <img src={Illustration} alt="" style={{height: '400px', margin: '20px 0 20px'}}/>
        </Centered>
        <Centered>
            {actions}
        </Centered>
    </Fragment>
)

export default EmptyPage;