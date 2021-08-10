import useSimpleAction from "@github-mirrors/hooks/use-simple-action";
import {createNewMirrors} from "@github-mirrors/providers/repositories-provider";
import {useEffect} from "react";

const useOrganizationImport = (reset: () => void) => {
    const {isDialogOpen, openDialog, isComplete, ...formProps} = useSimpleAction(createNewMirrors);

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

export default useOrganizationImport;