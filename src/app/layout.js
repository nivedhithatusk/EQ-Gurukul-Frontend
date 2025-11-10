import "./globals.css";

export const metadata = {
  title: "Equitas Gurukul Group of Schools",
  description: "Equitas Gurukul Group of Schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
