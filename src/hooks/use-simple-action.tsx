import {RequestProvider, SimpleAction} from "@github-mirrors/model/common";
import {useState} from "react";
import {useRest} from "@github-mirrors/hooks/use-rest";

function useSimpleAction<T>(provider: RequestProvider<T>): SimpleAction {
    const [isOpen, setIsOpen] = useState(false);
    const [parameter, setParameter] = useState<string | undefined>()
    const {error, isError, isLoading, wasLoaded, reset, send} = useRest(provider);

    const openDialog = () => {
        reset();
        setParameter(undefined);
        setIsOpen(true);
    };

    const onChange = (e: any) => {
        reset();
        setParameter(e.target.value);
    };

    return {
        isDialogOpen: isOpen && !wasLoaded,
        onAction: () => send(parameter),
        onChange,
        openDialog,
        onCancel: () => setIsOpen(false),
        isActionDisabled: isError || isLoading || !parameter,
        isInputDisabled: isLoading,
        errors: isError ? [error!] : [],
        isComplete: wasLoaded,
    };
}

export default useSimpleAction;