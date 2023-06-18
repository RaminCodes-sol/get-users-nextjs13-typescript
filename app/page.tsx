import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl">Home Page</h1>
      <Link href='/users' className='px-3 py-2 rounded bg-purple-600 border-none outline-none transition-colors hover:bg-purple-700'>Users</Link>
    </main>
  )
}
