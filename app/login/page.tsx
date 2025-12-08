"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

import AdminLoginForm from "@/components/admin/AdminLoginForm";
import AdminLoginInfo from "@/components/admin/AdminLogInInfo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // Access login function from AuthContext
  const { login } = useAuth();

  // Login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const FAKE_EMAIL = "admin@example.com";
    const FAKE_PASSWORD = "password123";

    const success = login(email, password);

    // To check credentials and navigate if correct
    if (email === FAKE_EMAIL && password === FAKE_PASSWORD && success) {
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  // Back to portal page redirect
  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-50">
      <AdminLoginInfo />

      <AdminLoginForm
        email={email}
        password={password}
        error={error}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleBack={handleBack}
      />
    </div>
  );
}
