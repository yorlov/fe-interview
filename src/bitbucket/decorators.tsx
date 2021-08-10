import * as React from "react";
import {Fragment, ReactNode} from "react";
import {Link, usePath} from "raviger";

import "@atlassian/aui/dist/aui/aui-prototyping.css"
import "@github-mirrors/bitbucket/less/aui-overrides.less";
import "@github-mirrors/bitbucket/less/bitbucket-theme.less";
import "@github-mirrors/bitbucket/less/buttons.less";
import "@github-mirrors/bitbucket/less/aui-page-typography.less";
import "@github-mirrors/bitbucket/less/paged-table.less";
import "@github-mirrors/bitbucket/less/avatars.less";

type WebSection = {
    title: string
    links: WebLink[]
}

type WebLink = {
    title: string
    path: string
}

const
    AppHeader = () => (
        <header id="header" role="banner">
            <nav className="aui-header aui-dropdown2-trigger-group" role="navigation">
                <div className="aui-header-inner">
                    <div className="aui-header-primary">
                        <h1 id="logo" className="aui-header-logo aui-header-logo-bitbucket">
                            <a href="https://yo-bitbucket.stiltsoft.by">
                                <span className="aui-header-logo-device">Y</span>
                            </a>
                        </h1>
                    </div>
                </div>
            </nav>
        </header>
    ),

    AppFooter = () => (
        <footer id="footer" role="contentinfo">
            <section className="footer-body"/>
        </footer>
    ),

    PanelNav = (props: { sections: WebSection[] }) => {
        const path = usePath();
        const highlight = (actualPath: string) => path === actualPath ? "aui-nav-selected" : undefined;

        return (
            <div className="aui-page-panel-nav">
                <nav className="aui-navgroup aui-navgroup-vertical" role="navigation">
                    <div className="aui-navgroup-inner">
                        <ul className="aui-nav">
                            <li className={highlight('/')}>
                                <Link href="/">Overview</Link>
                            </li>
                        </ul>
                        {props.sections.map(section => (
                            <Fragment key={section.title}>
                                <div className="aui-nav-heading">
                                    <strong>{section.title}</strong>
                                </div>
                                <ul className="aui-nav">
                                    {section.links.map(link => (
                                        <li key={link.path} className={highlight(link.path)}>
                                            <Link href={link.path}>
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Fragment>
                        ))}
                    </div>
                </nav>
            </div>
        );
    },

    AdministrationPage = (props: { sections: WebSection[], children: ReactNode }) => (
        <Fragment>
            <AppHeader/>
            <section id="content">
                <header className="aui-page-header">
                    <div className="aui-page-header-inner">
                        <div className="aui-page-header-main">
                            <h1>Administration</h1>
                        </div>
                    </div>
                </header>
                <div className="aui-page-panel content-body" id="aui-page-panel-content-body">
                    <div className="aui-page-panel-inner">
                        <PanelNav sections={props.sections}/>
                        <section className="aui-page-panel-content">
                            {props.children}
                        </section>
                    </div>
                </div>
            </section>
            <AppFooter/>
        </Fragment>
    );

export {
    AdministrationPage
};