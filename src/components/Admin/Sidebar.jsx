"use client";

import { SideBarLinks } from "@/constant/siderBarLinks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
  try {
    const response = await fetch("/api/admin/auth/logout", { method: "POST" });

    console.log("Response Status:", response.status);
    const data = await response.json();
    console.log("Response Body:", data);

    if (response.ok) {
      alert("Logged out successfully");
      window.location.href = "/admin/login";
    } else {
      alert("Logout failed. Please try again.");
    }
  } catch (error) {
    console.error("Error during logout:", error);
    alert("An error occurred. Please try again.");
  }
};


  return (
    <div className="w-75 min-h-screen bg-gray-900 text-white p-6 flex flex-col">
      <div className="flex">
        <div className="w-20 h-20 flex items-center justify-center flex-col mb-4 mr-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="self-center">
          <h3 className="text-xl font-bold mb-8">Equitas Gurukul</h3>
        </div>
      </div>

      <nav className="space-y-4 pt-20 flex-1">
        {SideBarLinks.map(
          (item) =>
            item.active && (
              <Link
                key={item.name}
                href={item.path}
                className="block px-8 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                {item.name}
              </Link>
            )
        )}

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="block px-12 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
