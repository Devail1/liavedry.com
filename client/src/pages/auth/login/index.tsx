import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="min-h-layout container mx-auto flex flex-col items-center justify-center bg-base-100">
      <div className="w-96">
        <div className="rounded-lg bg-base-200 p-8 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-bold">Sign In</h2>
          <form action="/login" method="post">
            <div className="mb-4 space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-base-content/50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4 space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-base-content/50"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>
            <div className="text-center">
              <Link href="/auth/signup" className="text-sm text-base-content">
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
