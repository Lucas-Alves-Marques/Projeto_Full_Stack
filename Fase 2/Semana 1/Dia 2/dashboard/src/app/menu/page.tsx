'use client';
import { useTheme } from "@/src/contexts/ThemeContext"
import { useLogin } from "@/src/contexts/UserConterx";

export default function Menu() {

    const { theme, toggleTheme } = useTheme();
    const { name } = useLogin();

    return (

        <div className={`flex flex-col items-center justify-center min-w-screen min-h-screen
            ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}>


            <h1 className="text-2xl font-bold">Olá {name}!</h1>
            <h1 className="text-2xl font-bold">Tema atual: {theme}</h1>
            <button className="mt-4 px-4 py-2 rounded bg-blue-500 text-white" onClick={toggleTheme}>

                Alternar tema

            </button>

        </div>

    )

}