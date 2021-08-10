import * as React from "react";
import {FC, ReactNode} from "react";

const AUIDialog = require('@github-mirrors/bitbucket/internal/dialog').default;

type Props = {
    children: ReactNode
    titleContent: ReactNode
    footerActionContent: ReactNode
    onClose: () => void
}

const Dialog: FC<Props> = ({titleContent, footerActionContent, children, onClose}) => (
    <AUIDialog onClose={onClose}
               titleContent={titleContent}
               footerActionContent={footerActionContent}>
        {children}
    </AUIDialog>
);

export default Dialog;