"use client";

import { useState } from "react";
import DOMPurify from "dompurify";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedUsername = DOMPurify.sanitize(username.trim());
    const sanitizedPassword = DOMPurify.sanitize(password.trim());

    if (!sanitizedUsername || !sanitizedPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    try {
      if (sanitizedUsername === "test" && sanitizedPassword === "1234test") {
        setSuccess("Login successful!");
        setError("");
      } else {
        setError("Login failed! Please check your username and password.");
        setSuccess("");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Please login to your account
        </p>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username or email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <div className="flex justify-between items-center text-sm">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-orange-500 underline hover:text-orange-700"
          >
            Register here
          </a>
        </p>
      </section>
    </main>
  );
}
