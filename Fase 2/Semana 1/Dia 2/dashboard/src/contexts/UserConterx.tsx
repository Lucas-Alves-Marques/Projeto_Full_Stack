"use client";
import { createContext, useContext, ReactNode, use, useState, ReactEventHandler, ReactElement } from "react";

interface LoginContextType{

    name: String,
    changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({children}: {children: ReactNode}){

    const [name, setName] = useState<String>('');

    function changeName(e: React.ChangeEvent<HTMLInputElement>){

        setName(e.target.value);

    }

    return(

        <LoginContext.Provider value={{name, changeName}}>

            {children}

        </LoginContext.Provider>


    )

};

export function useLogin(){

    const context = useContext(LoginContext);

    if(!context){

        throw new Error("useLogin dever ser usado dentro de ThemeProvider");

    }

    return context;

}