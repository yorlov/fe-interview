import * as React from "react";
import {Fragment, ReactNode} from "react";

const PageHeader = (props: { title: ReactNode, actions?: ReactNode, description?: ReactNode }) => (
    <Fragment>
        <header className="aui-page-header">
            <div className="aui-page-header-inner">
                <div className="aui-page-header-main">
                    {props.title}
                </div>
                <div className="aui-page-header-actions">
                    {props.actions}
                </div>
            </div>
        </header>
        {props.description}
    </Fragment>
);

export {
    PageHeader
};