import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <h1>Home page</h1>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="m-1 p-[1.2rem]">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="m-1 p-[1.2rem]">Signup</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </div>
  );
}
