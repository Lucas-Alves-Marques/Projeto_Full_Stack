'use client';
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Hooks() {

    const [count, setCount] = useState<Number>(0);

    const double = useMemo(() => {

        return Number(count) * 2;

    }, [count]);

    const handleClick = useCallback(() => {

        console.log("Clique!");

    }, []);

    useEffect(() => {

        const interval = setInterval(() => console.log("tic"), 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <main className="flex gap-8 h-full items-center justify-center">

            <div className="p-5 flex h-68 flex-col items-center bg-blue-950 border-2 rounded-[5px]">

                <h1 className="uppercase font-bold text-3xl mb-8">Incrementador</h1>
                <h1 className="font-medium text-2xl mb-2">Contador: {String(count)}</h1>
                <h1 className="font-medium text-2xl">Dobro: {double}</h1>
                <button
                    className="mt-8 rounded bg-white px-4 py-2 font-semibold text-black 
                    hover:scale-105 cursor-pointer transition-all duration-150 "
                    onClick={() => setCount(prev => Number(prev) + 1)}
                >
                    Incrementar Contador

                </button>

            </div>
            <div className="p-5 h-68 flex flex-col items-center justify-center bg-blue-950 border-2 rounded-[5px]">

                <div className="text-center mb-4">

                    <h1 className="uppercase font-bold text-3xl mb-2">Ação no Console</h1>
                    <p>Abra o console para ver a ação</p>

                </div>

                <button
                    className="mt-4 rounded bg-white px-4 py-2 font-semibold text-black hover:scale-105 cursor-pointer transition-all duration-150"
                    onClick={() => handleClick()}
                >
                    Console

                </button>

            </div>

        </main>

    );

};
