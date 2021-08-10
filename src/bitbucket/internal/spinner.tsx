import * as React from "react";
import '@atlassian/aui'; // We depend on the spinner

const Spinner = (props: any) => {
    //@ts-ignore
    return <aui-spinner size={props.size} filled={undefined}/>
};

export default Spinner;