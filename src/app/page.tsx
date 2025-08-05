"use client";
import { Card } from "@/components/ui/card";
import { UserCard } from "@/components/UserCard";

import { Users } from "@/lib/utils";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <main className="h-screen pb-3 w-full grid gap-4  ">
      {messages.map((message, index) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
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

      <form
        className="align-middle justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
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
