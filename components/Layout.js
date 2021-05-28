import Link from 'next/link'

export default function Layout({ children }) {

  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <Link href="/">
        <a className="text-xl font-semibold absolute top-0 mt-5">📆😀</a>
      </Link>

      {children}
    </div>
  )
}