"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLogin } from "../contexts/UserConterx";
import { useTheme } from "../contexts/ThemeContext";

export default function NavBar() {

    const { name } = useLogin();

    const router = useRouter();

    const pathName = usePathname();

    const { theme } = useTheme();

    return (

        <nav className={`flex justify-between px-4 py-6 uppercase font-bold
            ${theme == 'light' ? 'bg-blue-950 text-white': 'bg-white text-blue-950'} `}>

            <div className="flex gap-5">

                <p
                    onClick={() => router.push("/")}
                    className="hover:scale-110 cursor-pointer transition-all duration-75">

                    Home

                </p>
                <p
                    onClick={() => router.push("/login")}
                    className="hover:scale-110 cursor-pointer transition-all duration-75">

                    Login

                </p>
                <p
                    onClick={() => router.push("/dashboard")}
                    className="hover:scale-110 cursor-pointer transition-all duration-75">

                    Dashboard

                </p>


            </div>
            {name && !pathName.includes("/login")

                && <h1>{name}</h1>}

        </nav>

    );

}