import { ModeToggle } from "@/components/toggle-theme";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[60px] w-full items-center justify-between bg-background px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Prim AI</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
