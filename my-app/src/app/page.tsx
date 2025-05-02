import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-lg text-gray-700">
        This is a simple Next.js app with TypeScript and Tailwind CSS.
      </p>
      <Link href='./main/login/' className="mt-4 text-blue-500 hover:underline">
      This is a link to the login page
      </Link>
    </div>
  );
}
