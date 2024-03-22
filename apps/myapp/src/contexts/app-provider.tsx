import { useMemo, createContext, ReactNode } from "react";

export type AppContextValue = {
    name: string,
    appDispatch: Function
}

type AppContextProps = {
    appContextValue: AppContextValue,
    children: ReactNode
}

const empty = {} as AppContextValue;

export const ApplicationContext = createContext<AppContextValue>(empty);

export function ApplicationProvider({ appContextValue, children }: AppContextProps) {
    const contextValue = useMemo(() => {
        return Object.freeze(appContextValue)
    }, [appContextValue]);

    return (
        <ApplicationContext.Provider value={contextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}