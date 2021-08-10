import {Reducer, useCallback, useLayoutEffect, useReducer, useRef} from 'react';
import {RequestProvider} from "@github-mirrors/model/common";

const
    REQUEST = 'REQUEST',
    REQUEST_SUCCESS = 'REQUEST_SUCCESS',
    REQUEST_ERROR = 'REQUEST_ERROR',
    REQUEST_RESET = 'REQUEST_RESET';

type RequestState<T> = {
    isLoading: boolean
    response?: T
    error?: string
    wasLoaded: boolean
    isError: boolean
};

export function useRest<T>(provider: RequestProvider<T>) {
    const [state, dispatch] = useRequestReducer<T>();
    const {isLoading, response, error, wasLoaded, isError} = state;

    const hookUnmountedRef = useRef(false);
    useLayoutEffect(() => () => {
        hookUnmountedRef.current = true;
    }, []);

    const requestSuccess = (response: T) => {
        if (hookUnmountedRef.current) {
            return;
        }
        dispatch({type: REQUEST_SUCCESS, response});
    };

    const requestFailure = (xhr: any) => {
        if (hookUnmountedRef.current) {
            return;
        }

        let error;
        const responseJSON = xhr.responseJSON;

        if (responseJSON) {
            error = responseJSON.message || responseJSON.errors[0].message;
        } else {
            error = `${xhr.status}: ${xhr.statusText}`;
        }

        dispatch({
            type: REQUEST_ERROR,
            error
        });
    };

    const send = useCallback(
        (params: any) => {
            if (hookUnmountedRef.current) {
                return;
            }

            dispatch({type: REQUEST});

            provider(params)
                .then(requestSuccess, requestFailure);
        },
        [provider]
    );

    const reset = () => {
        if (hookUnmountedRef.current) {
            return;
        }

        dispatch({type: REQUEST_RESET});
    };

    return {isError, wasLoaded, isLoading, response, error, send, reset};
}

function useRequestReducer<T>() {
    return useReducer<Reducer<RequestState<T>, Action<T>>>(restReducer, initReducerState<T>());
}

function initReducerState<T>(): RequestState<T> {
    return {isLoading: false, wasLoaded: false, isError: false}
}

type Action<T> =
    | { type: typeof REQUEST }
    | { type: typeof REQUEST_RESET }
    | { type: typeof REQUEST_SUCCESS, response: T }
    | { type: typeof REQUEST_ERROR, error: string };

function restReducer<T>(state: RequestState<T>, action: Action<T>): RequestState<T> {
    switch (action.type) {
        case REQUEST:
            return {
                ...initReducerState(),
                isLoading: true,
            };

        case REQUEST_SUCCESS:
            return {
                ...state,
                response: action.response,
                wasLoaded: true,
                isLoading: false,
            };

        case REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false,
                isError: true
            };

        case REQUEST_RESET:
            return initReducerState();
    }

    return state;
}