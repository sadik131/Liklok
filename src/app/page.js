import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <UserButton afterSignOutUrl="/"></UserButton>
    </main>
  );
}
