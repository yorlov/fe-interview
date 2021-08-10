// @ts-nocheck
import {I18n, keyCode as keyCodes} from '@atlassian/aui';
import classNames from 'classnames';
import * as React from 'react';
import {Component} from 'react';
import Icon from '@github-mirrors/bitbucket/internal/icon';

const AUIDialogZIndex = 3000;
const AUIBlanketZIndex = 2980;

export const DialogHeader = ({headerActionContent, headerSecondaryContent, modal, onClose, titleContent}) => (
    <header className="aui-dialog2-header">
        <h2 className="aui-dialog2-header-main">{titleContent}</h2>
        {headerSecondaryContent ? (<div className="aui-dialog2-header-secondary">{headerSecondaryContent}</div>) : null}
        {headerActionContent ? (<div className="aui-dialog2-header-actions">{headerActionContent}</div>) : null}
        {(!modal && onClose) ?
            <a className="aui-dialog2-header-close" href="#" onClick={onClose}>
                <Icon icon="close-dialog">{I18n.getText('bitbucket.web.dialog.button.close')}</Icon>
            </a> :
            null}
    </header>);

export const DialogFooter = ({footerActionContent, footerHintContent}) => (
    <footer className="aui-dialog2-footer">
        {footerActionContent ? (<div className="aui-dialog2-footer-actions">{footerActionContent}</div>) : null}
        {footerHintContent ? (<div className="aui-dialog2-footer-hint">{footerHintContent}</div>) : null}
    </footer>);

export const DialogContent = ({children}) => <div className="aui-dialog2-content">{children}</div>;

export const DialogSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    XLARGE: 'xlarge',
};

export default class Dialog extends Component {

    static defaultProps = {
        modal: false,
        size: DialogSize.MEDIUM,
        warning: false,
    };

    componentDidMount() {
        //freeze scrolling ability of body
        const {body: {style}} = document;

        this.allowBodyScroll = (oldOverflow => () => {
            style.overflow = oldOverflow;
        })(style.overflow);
        style.overflow = 'hidden';
        addEventListener('keydown', this.onKeyDownEsc);
    }

    componentWillUnmount() {
        this.allowBodyScroll();
        removeEventListener('keydown', this.onKeyDownEsc);
    }

    onKeyDownEsc = ({key, keyCode}) => {
        const {modal, onClose} = this.props;

        if ((key === 'Escape' || keyCode === keyCodes.ESCAPE) && !modal && onClose) {
            onClose();
        }
    };

    render() {
        const {
            children,
            className,
            headerSecondaryContent,
            headerActionContent,
            footerActionContent,
            footerHintContent,
            id,
            modal,
            onClose,
            size,
            titleContent,
            warning,
        } = this.props;

        return (
            <div>
                <section
                    role="dialog"
                    id={id}
                    className={classNames('aui-layer', 'aui-dialog2', `aui-dialog2-${size}`, {'aui-dialog2-warning': warning}, className)}
                    style={{zIndex: AUIDialogZIndex}}
                >
                    <DialogHeader {...{headerActionContent, headerSecondaryContent, modal, onClose, titleContent}} />
                    <DialogContent>{children}</DialogContent>
                    <DialogFooter {...{footerActionContent, footerHintContent}} />
                </section>
                <div className="aui-blanket" tabIndex="0" style={{zIndex: AUIBlanketZIndex}} aria-hidden={false}
                     onClick={modal ? null : onClose}/>
            </div>
        );
    }
}