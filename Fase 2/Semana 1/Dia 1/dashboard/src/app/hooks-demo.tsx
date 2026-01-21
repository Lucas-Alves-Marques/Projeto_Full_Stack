'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Hooks() {

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

        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

            <h1 className="font-bold text-3xl">Contador: {String(count)}</h1>
            <h1 className="font-bold text-3xl">Dobro: {double}</h1>
            <button
                className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black hover:scale-105 cursor-pointer transition-all duration-150"
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
            <input ref={inputRef} placeholder="Clique no Botão" />
            <button onClick={inputFocus}>Focar Input</button>

        </main>

    )

};
