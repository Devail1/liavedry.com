import { loginSuccess } from "@/redux/features/authSlice";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "@/redux/services/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";

function SignupPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await createUser(data);
      const loginResponse = await loginUser({
        email: data.email,
        password: data.password,
      });

      if ("data" in loginResponse) {
        dispatch(loginSuccess(loginResponse.data));
      }
      router.push("/");
    } catch (error) {
      console.error("Failed to create user or log in:", error);
    }
  };

  return (
    <div className="min-h-layout container mx-auto flex flex-col items-center justify-center bg-base-100">
      <div className="w-96">
        <div className="rounded-lg bg-base-200 p-8 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit} method="post">
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
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
            {isError && (
              <div className="text-red-500">
                Failed to create user. Please try again.
              </div>
            )}
            <div className="text-center">
              <Link href="/auth/login" className="text-sm text-base-content">
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
