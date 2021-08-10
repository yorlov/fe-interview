import classNames from 'classnames';
import * as React from 'react';

const defaultProps = {
    size: 'small',
};

const Icon = (props: any) => {
    let icon = props.icon;
    if (!(/^aui-iconfont-/).test(icon)) {
        icon = `aui-iconfont-${icon}`;
    }

    return (
        <span className={classNames('aui-icon', `aui-icon-${props.size}`, icon)} title={props.title}>
            {props.children}
        </span>
    );
};

Icon.defaultProps = defaultProps;

export default Icon;