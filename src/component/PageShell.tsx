"use client";

import Menu from "@/component/Menu";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat sm:h-full sm:min-h-0"
      style={{ backgroundImage: "url('/page_bg.jpeg')" }}
    >
      <aside
        className="fixed left-0 top-0 z-30 hidden h-dvh w-[clamp(240px,22vw,350px)] shrink-0 overflow-y-auto border-r border-neutral-300/70 bg-cover bg-center bg-no-repeat sm:block"
        style={{ backgroundImage: "url('/sidebar_bg.jpeg')" }}
      >
        <Menu />
      </aside>
      <div className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col sm:h-full sm:pl-[clamp(240px,22vw,350px)]">
        <div
          className="shrink-0 border-b border-neutral-300/70 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: "url('/sidebar_bg.jpeg')" }}
        >
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
