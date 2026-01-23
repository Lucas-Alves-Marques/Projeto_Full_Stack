'use client';
import { useTheme } from "@/src/contexts/ThemeContext"
import { useLogin } from "@/src/contexts/UserConterx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashBoard() {

    const router = useRouter();

    const { theme, toggleTheme } = useTheme();

    const { name, changeName } = useLogin();

    const [lastLogin, setLastLogin] = useState<String>('');

    const logOut = () => {

        changeName({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);

        localStorage.clear();

        router.push("/login");

    };

    useEffect(() => {

        const nameUser = localStorage.getItem("user");

        if (!nameUser) {

            router.push("/login")

            return;
        };

        const loginDay = localStorage.getItem("dataLogin");

        if (loginDay) {

            const newData = new Date(loginDay);

            const stringData = newData.toLocaleDateString("pt-BR", {

                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",

            });

            setLastLogin(String(stringData));

        }

    }, [name]);

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
            <h2 className="mt-4 font-medium text-gray-600">Último Login: {lastLogin}</h2>

        </div>

    )

}