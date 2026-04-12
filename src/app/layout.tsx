import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Jou's Profile",
  description: "Jou's Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="min-h-dvh w-full overflow-x-hidden antialiased">
      <body className="m-0 flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-neutral-50 font-sans text-neutral-900 sm:h-dvh sm:min-h-0">
        <div className="flex min-h-dvh w-full min-w-0 max-w-full flex-1 flex-col overflow-x-hidden bg-neutral-200 sm:h-full sm:min-h-0">
          {children}
        </div>
      </body>
    </html>
  );
}
