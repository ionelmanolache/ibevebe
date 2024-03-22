import { useMemo, createContext } from "react";

export const ApplicationContext = createContext();

export function ApplicationProvider({ appContextValue, children }) {

    const contextValue = useMemo(() => {
        return Object.freeze(appContextValue)
    }, [appContextValue]);

    return (
        <ApplicationContext.Provider value={contextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}