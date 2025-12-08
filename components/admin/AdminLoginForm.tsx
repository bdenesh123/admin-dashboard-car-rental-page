import React from "react";

type AdminLoginFormProps = {
  email: string;
  password: string;
  error: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: React.FormEvent) => void;
  handleBack: () => void;
};

export default function AdminLoginForm({
  email,
  password,
  error,
  setEmail,
  setPassword,
  handleLogin,
  handleBack,
}: AdminLoginFormProps) {
  return (
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
  );
}
