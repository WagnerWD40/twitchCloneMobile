import React, { createContext, useState, useContext } from 'react';

interface UserState {
    email: string;
    setUserEmail: (email: string) => void;
}

const UserContext = createContext<UserState>({} as UserState);

const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserState>({ email: "lolada@lolada.com"} as UserState);

    return (
        <UserContext.Provider value={user}>
            {children}
        </ UserContext.Provider>
    );
}

function useUserData(): UserState {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUserData must be used within an UserProvider');
    }

    return context;
}

export {
    UserProvider,
    useUserData,
}
