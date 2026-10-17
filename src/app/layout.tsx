import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-slate-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}