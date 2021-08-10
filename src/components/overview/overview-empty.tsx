// @ts-ignore
import Illustration from "@github-mirrors/images/empty-overview.svg";
import * as React from "react";
import {FC, Fragment} from "react";
import Centered from "@github-mirrors/util/centered";

const EmptyPage: FC = () => (
    <Fragment>
        <Centered>
            <img src={Illustration} alt="" style={{height: '400px', margin: '20px 0 20px'}}/>
        </Centered>
    </Fragment>
)

export default EmptyPage;