import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this website</h1>
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
