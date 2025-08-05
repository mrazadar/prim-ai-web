import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
