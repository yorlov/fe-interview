import * as React from "react";
import {Fragment} from "react";
import {Waypoint} from "react-waypoint";

const InfiniteScroller = (props: { onFetch: () => void, isFetching: boolean }) => {
    const showWaypoint = !props.isFetching;

    return (
        <Fragment>
            {showWaypoint && <Waypoint onEnter={props.onFetch}/>}
        </Fragment>
    );
};

export default InfiniteScroller