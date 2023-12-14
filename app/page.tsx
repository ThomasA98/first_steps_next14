import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <span className="text-5xl">hola mundo!!!</span>
      <Link href={ '/about' }>about page</Link>
    </main>
  )
}