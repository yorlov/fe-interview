import {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {useRest} from '@github-mirrors/hooks/use-rest';
import {Page, RequestProvider} from "@github-mirrors/model/common";

export function usePagedRest<T>(provider: RequestProvider<Page<T>>) {
    const {response, send, isLoading, wasLoaded, isError, error, reset: restReset} = useRest(provider);
    const [items, updateItems] = useState<T[] | undefined>();

    const isLastPage = useMemo(() => response?.isLastPage || false, [response]);

    useLayoutEffect(() => {
        if (wasLoaded) {
            const newly = response?.values;
            if (newly && newly.length) {
                updateItems(prevItems => [...(prevItems || []), ...newly]);
            }
        }
    }, [wasLoaded, response]);

    const loadNextPage = useCallback(
        (params?: any) => {
            if (isLoading || isLastPage || isError) {
                return;
            }

            return send({
                ...params,
                start: response?.nextPageStart || 0
            });
        },
        [response, send, isLoading, isError]
    );

    const reset = useCallback(() => {
        restReset();
        updateItems(undefined);
    }, [restReset]);

    return {
        isLoading,
        isLastPage,
        wasLoaded,
        loadNextPage,
        response: items,
        isError,
        error,
        reset,
    };
}