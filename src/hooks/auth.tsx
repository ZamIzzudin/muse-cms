'use client'

import React from 'react';

export interface Auth{
    id: string,
    username: string,
    email: string,
    role: string,
    token:string
}

export type AuthContextType = {
    auth: Auth;
    login: (email:string, password: string) => void;
    // register: (id:string, username: string, email:string, password:string, role: string) => void;
    // refreshToken: (id:string) => void;
    // checkLogin: (token:string) => void;
    logout:() => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const plain = {
        id: "",
        username: "",
        email: "",
        role: "",
        token:""
    }

    const [auth, setAuth] = React.useState(plain)

    function login(){
        setAuth({
            id: "111",
            username: "odin",
            email: "odin@gmail.com",
            role: "Sysadmin",
            token:"TOKEN"
        }) 
    }

    function logout(){
        setAuth(plain)
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}