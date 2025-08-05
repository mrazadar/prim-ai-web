"use client";
import { Card } from "@/components/ui/card";
import { UserCard } from "@/components/UserCard";

import { cn, Users } from "@/lib/utils";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <main className=" h-[calc(100vh-4rem)] grid justify-items-center dark:bg-amber-500 w-full">
      <div className="scroll-auto pb-15  w-full">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={cn(
              "whitespace-pre-wrap p-2 m-2 rounded-lg",
              message.role === "user"
                ? "bg-zinc-300 dark:bg-amber-300 text-gray-900"
                : "bg-slate-300 dark:bg-amber-400 text-gray-900"
            )}
          >
            {message.role === "user" ? "User Message: " : "Answer: "}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <span key={i}>{part.text}</span>;
                case "source-url":
                  return (
                    <a key={i} href={part.url}>
                      {part.url}
                    </a>
                  );
              }
            })}
          </div>
        ))}
      </div>
      <form
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 w-full rounded shadow-xl"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-amber-700 bottom-0 w-full max-w-md p-4 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl text-accent-foreground"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </main>

    // return (
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-auto pb-3">
    //     <div>
    //       <h1 className="text-4xl font-bold">Prim AI</h1>
    //       <p className="text-xl">
    //         Prim AI is a powerful AI-powered platform that allows you to create,
    //         manage, and deploy AI models with ease.
    //       </p>
    //     </div>
    //     <section className="grid grid-cols-1 gap-y-4 w-full md:grid-cols-3 md:px-4 md:gap-4">
    //       {Users.map((user, index) => (
    //         <UserCard key={user.name} listIndex={index} {...user} />
    //       ))}
    //     </section>
    //   </main>
  );
}
