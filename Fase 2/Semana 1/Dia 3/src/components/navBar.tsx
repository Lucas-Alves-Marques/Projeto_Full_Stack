"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {

    const router = useRouter();

    return (

        <nav className="flex gap-4 p-4 bg-blue-900 uppercase font-bold text-white">

            <p
                onClick={() => router.push("/")}
                className="hover:scale-110 cursor-pointer transition-all duration-75">

                Home

            </p>
            <p
                onClick={() => router.push("/dashboard")}
                className="hover:scale-110 cursor-pointer transition-all duration-75">

                Dashboard

            </p>
            <p
                onClick={() => router.push("/login")}
                className="hover:scale-110 cursor-pointer transition-all duration-75">

                Login

            </p>

        </nav>

    )


}