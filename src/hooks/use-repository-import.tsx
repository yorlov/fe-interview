import useSimpleAction from "@github-mirrors/hooks/use-simple-action";
import {createNewMirror} from "@github-mirrors/providers/repositories-provider";
import {useEffect} from "react";

const useRepositoryImport = (reset: () => void) => {
    const {isDialogOpen, openDialog, isComplete, ...formProps} = useSimpleAction(createNewMirror);

    useEffect(() => {
        if (isComplete) {
            reset();
        }
    }, [isComplete]);

    return {
        isDialogOpen,
        openDialog,
        formProps
    };
};

export default useRepositoryImport;