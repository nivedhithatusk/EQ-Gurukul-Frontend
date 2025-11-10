import Sidebar from "@/components/Admin/Sidebar";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminProtectedLayout({ children, pathname }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  console.log("pathname ===>", pathname);

  let user = null;
  try {
    if (token) {
      user = await verifyToken(token);
        console.log("user ===>", user);

    }
  } catch (err) {
    console.error("Invalid token:", err.message);
  }

  if (user && pathname === "/admin/login") {
    return redirect("/admin/dashboard");
  }

  if (!user && pathname !== "/admin/login") {
    return redirect("/admin/login");
  }

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-x-auto">{children}</main>
    </div>
  );
}
