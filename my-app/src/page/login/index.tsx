"use client";

import { useState } from "react";
import DOMPurify from "dompurify";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sanitize inputs to prevent XSS
    const sanitizedUsername = DOMPurify.sanitize(username.trim());
    const sanitizedPassword = DOMPurify.sanitize(password.trim());

    // Basic input validation
    if (!sanitizedUsername || !sanitizedPassword) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }

    try {
      if (sanitizedUsername === 'test' && sanitizedPassword === '1234test') {
        setSuccess('Login successful!');
        setError('');
      } else {
        setError('Login failed! Please check your username and password.');
        setSuccess('');
      }
    } catch {
      setError('Something went wrong. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <section className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center">
        <h1 className="text-xl font-bold mb-6">Login</h1>

        <form className="w-full flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            autoComplete="username"
            placeholder="Username or Email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
            Forgot password?
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-orange-300 border-2 border-orange-400 text-white hover:text-black hover:shadow-lg rounded-sm font-semibold transition"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t have an account yet?{" "}
            <a
              href="/register"
              className="text-orange-500 underline hover:text-orange-700"
            >
              Register here
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
