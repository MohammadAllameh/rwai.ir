import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-purple-200/90 backdrop-blur supports-[backdrop-filter]:bg-purple-200/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block text-purple-900 ml-2">
              حمید علامه
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-purple-600 text-purple-900"
              href="#hero"
            >
              خانه
            </Link>
            <Link
              className="transition-colors hover:text-purple-600 text-purple-900"
              href="#courses"
            >
              دوره‌ها
            </Link>
            <Link
              className="transition-colors hover:text-purple-600 text-purple-900"
              href="#footer"
            >
              تماس
            </Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden text-purple-900"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
    </header>
  );
}
