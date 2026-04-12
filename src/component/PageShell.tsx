"use client";

import Link from "next/link";
import Menu from "@/component/Menu";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-neutral-100 sm:h-full sm:min-h-0">
      <Link
        href="/"
        className="fixed left-3 top-3 z-50 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-md backdrop-blur sm:hidden"
      >
        返回
      </Link>
      <aside className="fixed left-0 top-0 z-30 hidden h-dvh w-[clamp(240px,22vw,350px)] shrink-0 overflow-y-auto border-r border-neutral-200 bg-neutral-100 sm:block">
        <Menu />
      </aside>
      <div className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col sm:h-full sm:pl-[clamp(240px,22vw,350px)]">
        <div className="shrink-0 pt-14 sm:hidden" aria-hidden />
        <div className="shrink-0 border-b border-neutral-200 bg-white sm:hidden">
          <div className="mx-auto flex w-full min-w-0 justify-center py-2">
            <Menu />
          </div>
        </div>
        <main className="w-full min-w-0 max-w-full flex-1 overflow-x-hidden sm:min-h-0 sm:overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
