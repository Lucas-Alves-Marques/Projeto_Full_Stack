'use client';
import { useTheme } from "@/src/contexts/ThemeContext"
import { useLogin } from "@/src/contexts/UserConterx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashBoard() {

    const router = useRouter();

    const { theme, toggleTheme } = useTheme();
    const { name, changeName } = useLogin();

    const logOut = () => {

        changeName({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);

        localStorage.clear();

        router.push("/login");

    };

    useEffect(() => {

        if(!name) router.push("/login");

    }, [name])

    return (

        <div className={`flex flex-col items-center justify-center h-full
            ${theme === "light" ? "text-black" : "bg-gray-900 text-white"}`}>


            <h1 className="text-2xl font-bold">Bem-Vindo {name}!</h1>
            <h1 className="text-2xl font-bold">Tema atual: {theme}</h1>
            <div className="flex gap-4">

                <button className="mt-4 px-4 py-2 rounded bg-blue-900 text-white cursor-pointer" onClick={toggleTheme}>

                    Alternar tema

                </button>
                <button
                    className="mt-4 px-4 py-2 rounded bg-blue-900 text-white cursor-pointer"
                    onClick={logOut}>

                    Sair

                </button>

            </div>


        </div>

    )

}