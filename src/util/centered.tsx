import * as classNames from "classnames";
import * as React from "react";
import {ReactNode} from "react";

import "@github-mirrors/util/centered.less";

const Centered = (props: { children: ReactNode, className?: string }) => (
    <div className={classNames("centered", props.className)}>
        {props.children}
    </div>
);

export default Centered;