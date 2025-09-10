import Link from "next/link";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backfrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="text-3xl font-bold text-primary tracking-wider"
            >
              Flux
            </Link>
          </div>
          <Desktop />
          <Mobile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
