"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { useLogin } from "@/src/contexts/UserConterx";

export default function Login() {

    const router = useRouter();

    const { name, changeName } = useLogin();

    const inputRef = useRef<HTMLInputElement>(null);

    const inputFocus = () => {

        inputRef.current?.focus();

    };

    const onSubmit = (e: FormEvent) => {

        e.preventDefault();

        if (name.trim() !== '') {

            const dataLogin = new Date().toISOString();

            localStorage.setItem("dataLogin", dataLogin);

            localStorage.setItem("user", String(name));

            router.push("/dashboard");


        };


    };

    return (

        <div className="flex w-full h-full">

            <form
                onSubmit={e => onSubmit(e)}
                className="m-auto flex gap-6 p-5 max-w-3xl flex-col items-center justify-between bg-blue-950 border-2 border-white
                rounded-[5px]">

                <div className="flex flex-col gap-4">

                    <h1 className="uppercase text-white font-bold text-2xl">

                        Usuário

                    </h1>
                    <input
                        ref={inputRef}
                        value={String(name)}
                        onChange={e => changeName(e)}
                        className="bg-white text-black pl-4 rounded h-8 w-70 focus:border-blue-400"
                    />

                </div>
                <button
                    onClick={() => { if (!name) inputFocus() }}
                    className="rounded bg-white px-4 py-2 font-semibold text-black 
                    hover:scale-105 cursor-pointer transition-all duration-150">

                    Entrar

                </button>

            </form>

        </div>

    )

}