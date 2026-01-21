'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLogin } from "../contexts/UserConterx";
import { useRouter } from "next/navigation";

export default function Hooks() {

    const router = useRouter();

    const { name, changeName } = useLogin();

    const [count, setCount] = useState<Number>(0);

    const inputRef = useRef<HTMLInputElement>(null);

    const double = useMemo(() => {

        return Number(count) * 2;

    }, [count]);

    const handleClick = useCallback(() => {

        console.log("Clique!");

    }, []);

    const inputFocus = () => {

        inputRef.current?.focus();

    };

    useEffect(() => {

        const interval = setInterval(() => console.log("tic"), 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <main className="flex gap-6 p-5 max-w-3xl flex-col items-start justify-between bg-gray-700 border-2">

            <h1 className="font-bold text-3xl">Contador: {String(count)}</h1>
            <h1 className="font-bold text-3xl">Dobro: {double}</h1>
            <div className="flex gap-4">

                <button
                    className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black 
                    hover:scale-105 cursor-pointer transition-all duration-150 "
                    onClick={() => setCount(prev => Number(prev) + 1)}
                >
                    Incrementar Contador

                </button>
                <button
                    className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black hover:scale-105 cursor-pointer transition-all duration-150"
                    onClick={() => handleClick()}
                >
                    Console

                </button>

            </div>

            <input
                ref={inputRef}
                value={String(name)}
                onChange={(e) => changeName(e)}
                placeholder="Clique no Botão"
                className="bg-white text-black pl-4 rounded h-10 focus:border-blue-400"
            />
            <div className="flex gap-4">

                <button
                    className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black hover:scale-105 cursor-pointer transition-all duration-150"
                    onClick={inputFocus}>

                    Focar Input

                </button>
                <button
                    className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black hover:scale-105
                    cursor-pointer transition-all duration-150"
                    onClick={() => router.push('/menu')}
                >

                    Fazer Login

                </button>

            </div>


        </main>

    )

};
