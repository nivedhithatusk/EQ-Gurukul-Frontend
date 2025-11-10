"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "../../../styles/login.css";
import { COOKIE_NAME } from "@/lib/auth";
import { AdminLoginApi } from "@/api/AdminLoginApi";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await AdminLoginApi({ username, password });
      if (response.status !== 200)
        throw new Error(data?.error || "Invalid credentials");

      const data = response.data;
      console.log("COOKIE_NAME ===> ", COOKIE_NAME);
      document.cookie = `${COOKIE_NAME} = ${data?.token}; path=/`;

      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" role="main">
      <section className="right-side">
        <h2>Admin Login</h2>
        <p className="description">Sign in to access your dashboard.</p>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="username"
            className="button btn-google"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter the User Name"
          />
          <input
            id="password"
            className="button btn-google"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the Password"
          />

          <button
            className="button btn-apple"
            type="submit"
            aria-label="Sign in"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </section>
    </div>
  );
}
