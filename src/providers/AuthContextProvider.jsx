import { useState } from 'react';
import { AuthContext } from '../contexts';

export default function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
