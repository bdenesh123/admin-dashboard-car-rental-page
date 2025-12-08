"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const FAKE_EMAIL = "admin@example.com";
    const FAKE_PASSWORD = "password123";

    const success = login(email, password);

    if (email === FAKE_EMAIL && password === FAKE_PASSWORD && success) {
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-50">
      <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-green-100">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          SewaCar Admin
        </h1>
        <p className="text-slate-900 text-lg mb-8">
          Securely manage your car rental system. Use the credentials below for
          testing.
        </p>
        <div className="bg-green-200 text-green-900 p-6 rounded-xl text-base sm:text-lg font-medium shadow-md w-full max-w-sm text-start">
          <p>
            <strong>Email:</strong> admin@example.com
          </p>
          <p>
            <strong>Password:</strong> password123
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 flex flex-col space-y-6 border border-green-100">
          <h2 className="text-3xl font-semibold text-green-700 text-center">
            Admin Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="w-full py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg shadow-md">
              Login
            </button>
          </form>

          <button
            onClick={handleBack}
            className="w-full py-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition font-medium"
          >
            &larr; Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
