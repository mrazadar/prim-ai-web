import { Card } from "@/components/ui/card";
import { UserCard } from "@/components/UserCard";

export const Users = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    avatarUrl: "https://avatars.githubusercontent.com/u/123456?v=4",
  },
  {
    name: "Mark Johnson",
    email: "mark@example.com",
    role: "User",
    avatarUrl: "https://avatars.githubusercontent.com/u/234567?v=4",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Admin",
    avatarUrl: "https://avatars.githubusercontent.com/u/789012?v=4",
  },
  {
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    avatarUrl: "https://avatars.githubusercontent.com/u/345678?v=4",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-auto pb-3">
      <div>
        <h1 className="text-4xl font-bold">Prim AI</h1>
        <p className="text-xl">
          Prim AI is a powerful AI-powered platform that allows you to create,
          manage, and deploy AI models with ease.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-y-4 w-full md:grid-cols-3 md:px-4 md:gap-4">
        {Users.map((user, index) => (
          <UserCard key={user.name} listIndex={index} {...user} />
        ))}
      </section>
    </main>
  );
}
