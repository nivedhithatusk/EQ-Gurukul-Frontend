import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import AdminProtectedLayout from "@/components/Admin/AdminProtectedLayout";

export default function AdminLayout({ children, user }) {
  const pathname = usePathname();

  return (
    <AdminProtectedLayout pathname={pathname}>
      <div className="min-h-screen flex bg-slate-50">
        <Sidebar user={user} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AdminProtectedLayout>
  );
}
