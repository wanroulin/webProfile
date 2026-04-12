"use client";

import Menu from "@/component/Menu";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-neutral-100 sm:h-full sm:min-h-0 sm:flex-row">
      <aside className="hidden min-h-0 w-[clamp(240px,22vw,350px)] shrink-0 overflow-y-auto border-r border-neutral-200 sm:block sm:h-full">
        <Menu />
      </aside>
      <div
        className="hidden min-h-0 min-w-0 flex-1 bg-neutral-200 sm:block sm:h-full"
        aria-hidden
      />
      <div className="flex w-full min-w-0 max-w-full justify-center py-4 sm:hidden">
        <Menu />
      </div>
    </div>
  );
}
