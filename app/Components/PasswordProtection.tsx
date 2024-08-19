"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const PasswordProtection = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = process.env.NEXT_PUBLIC_UPLOAD_PAGE_PASSWORD;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Incorrect password. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setPassword("");
    }
  };

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1F1F1F]">
            Enter Password
          </h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded border border-gray-300 p-2 mb-4"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#1F1F1F] hover:bg-[#444444] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
