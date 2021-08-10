import * as React from "react";
import Centered from "@github-mirrors/util/centered";
import Spinner from "@github-mirrors/bitbucket/internal/spinner";

const CenteredSpinner = (props: { className: string }) => (
    <Centered className={props.className}>
        <Spinner size="large"/>
    </Centered>
);

export default CenteredSpinner;