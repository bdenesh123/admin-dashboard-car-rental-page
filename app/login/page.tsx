"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const FAKE_EMAIL = "admin@example.com";
    const FAKE_PASSWORD = "password123";

    if (email === FAKE_EMAIL && password === FAKE_PASSWORD) {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("emailid", email);
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleBack = () => {
    router.push("/"); // redirect to home page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-2xl shadow-xl flex flex-col space-y-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-green-700">
          SewaCar Admin Login
        </h1>

        {/* Info box for test credentials */}
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-md text-sm text-center">
          Test Credentials: <br />
          <strong>Email:</strong> admin@example.com <br />
          <strong>Password:</strong> password123
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="w-full py-3 bg-green-700 hover:bg-green-600 transition text-white font-semibold rounded-lg mt-2">
            Login
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="w-full py-3 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition font-medium"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
