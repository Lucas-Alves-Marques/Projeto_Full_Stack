'use client';
import { useTheme } from "@/src/contexts/ThemeContext"
import { useLogin } from "@/src/contexts/UserConterx";
import { useRouter } from "next/navigation";

export default function DashBoard() {

    const router = useRouter();

    const { theme, toggleTheme } = useTheme();
    const { name } = useLogin();

    return (

        <div className={`flex flex-col items-center justify-center h-full
            ${theme === "light" ? "text-black" : "bg-gray-800 text-white"}`}>


            <h1 className="text-2xl font-bold">Olá {name}!</h1>
            <h1 className="text-2xl font-bold">Tema atual: {theme}</h1>
            <div className="flex gap-4">

                <button className="mt-4 px-4 py-2 rounded bg-blue-900 text-white cursor-pointer" onClick={toggleTheme}>

                    Alternar tema

                </button>
                <button
                    className="mt-4 px-4 py-2 rounded bg-blue-900 text-white cursor-pointer"
                    onClick={() => router.back()}>

                    Voltar

                </button>

            </div>


        </div>

    )

}