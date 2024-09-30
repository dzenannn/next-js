import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let's get started! 🔥</p>
      {/* wrong
      <p>
        <a href="/about">About Us</a>
      </p> */}

      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
