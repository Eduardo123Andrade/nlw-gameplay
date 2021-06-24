import React, { createContext, ReactNode, useState } from 'react'


type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

type AuthContextData = {
    user: User
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState({} as User)
    const [isLoading, setLoading] = useState(false)

    const SignIn = () => {
        try {
            setLoading(true)
            
        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}