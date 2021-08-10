import * as React from "react";
import * as ReactDOM from "react-dom";
import {useRoutes} from "raviger";
import {I18n} from "@atlassian/wrm-react-i18n";
import {AdministrationPage} from "@github-mirrors/bitbucket/decorators";
import AccountsPage from "@github-mirrors/pages/accounts-page";
import RepositoriesPage from "@github-mirrors/pages/repositories-page";
import OverviewPage from "@github-mirrors/pages/overview-page";

const App = () => {

    const sections = [
        {
            title: I18n.getText("github.mirrors.configuration.section.title"),
            links: [
                {path: "/accounts", title: I18n.getText("github.mirrors.configuration.accounts.title")},
                {path: "/repositories", title: I18n.getText("github.mirrors.configuration.repositories.title")}
            ]
        }
    ];

    const routes = {
        "/": () => <OverviewPage/>,
        "/accounts": () => <AccountsPage/>,
        "/repositories": () => <RepositoriesPage/>
    };

    const content = useRoutes(routes);

    return (
        <AdministrationPage sections={sections}>
            {content}
        </AdministrationPage>
    );
};

ReactDOM.render(<App/>, document.getElementById("app")!);