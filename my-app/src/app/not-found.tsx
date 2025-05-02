import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 px-4">
      <section className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <Image
            src="/image/not-found.jpg"
            alt="Page not found illustration"
            width={256}
            height={256}
            className="mx-auto"
          />
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you are looking for not exist.
        </p>
        <p className="mt-2 text-gray-500">
          It might have been moved or deleted.
        </p>
        <Link href="/" className="mt-6 inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Go Back to Homepage
        </Link>
      </section>
    </main>
  );
}