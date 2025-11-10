import "../../globals.css";

export default function LoginLayout({ children }) {
  return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        {children}
      </div>
  );
}
