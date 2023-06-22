import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string | undefined>("");
  const printFromEnv = () => {
    console.log("Hello World===>", process.env.NEXT_PUBLIC_API_KEY);
    if (process.env.NEXT_PUBLIC_API_KEY === "sk_hello_world") {
      setValue("Hello World");
    } else {
      setValue("GoodBye World");
    }
  };

  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <h1>Hello World!</h1>
      <button
        className="bg-[#00ff] text-[#ffffff] p-[20px]"
        onClick={printFromEnv}
      >
        Click Me!
      </button>
      <h2 className="mt-[20px] text-[20px]">{value}</h2>
    </div>
  );
}
