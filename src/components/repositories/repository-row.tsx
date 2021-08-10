import * as React from "react";
import {FC, useEffect} from "react";
import {GitHubMirror} from "@github-mirrors/model/repositories-model";
import {I18n} from "@atlassian/wrm-react-i18n";
import {shortAge} from "@github-mirrors/util/time";
import {useRest} from "@github-mirrors/hooks/use-rest";
import {removeMirror} from "@github-mirrors/providers/repositories-provider";

const RepositoryRow: FC<GitHubMirror & { onRemove: () => void }> = ({id, project, repository, lastActivityAt, refreshedAt, gitHubUrl, onRemove}) => {
    const {send, wasLoaded} = useRest(removeMirror);

    useEffect(() => {
        if (wasLoaded) {
            onRemove();
        }
    }, [wasLoaded]);

    return (
        <tr className="repository-row">
            <td>
                <a href={project.projectUrl}>
                    {project.name}
                </a>
            </td>
            <td>
                <a href={repository.repositoryUrl}>
                    {repository.name}
                </a>
            </td>
            <td>{shortAge(lastActivityAt)}</td>
            <td>{shortAge(refreshedAt)}</td>
            <td>
                <a href={gitHubUrl}>
                    {I18n.getText('github.mirrors.repositories.list.row.link')}
                </a>
                {'\u00A0'}
                /
                {'\u00A0'}
                <a href='#' onClick={() => send(id)}>
                    {I18n.getText('github.mirrors.repositories.list.row.remove')}
                </a>
            </td>
        </tr>
    );
};

export default RepositoryRow;