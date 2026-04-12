"use client";

import Menu from "@/component/Menu";
import TrueFocus from "@/component/TrueFocus";

const focusProps = {
  sentence: "Design, Build, Change",
  separator: ", ",
  manualMode: false,
  blurAmount: 6.5,
  borderColor: "#1f1f1f",
  glowColor: "rgba(31, 31, 31, 0.45)",
  animationDuration: 0.5,
  pauseBetweenAnimations: 1.5,
} as const;

export default function Home() {
  return (
    <div
      className="flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat sm:h-full sm:min-h-0 sm:flex-row"
      style={{ backgroundImage: "url('/page_bg.jpeg')" }}
    >
      <aside
        className="hidden min-h-0 w-[clamp(240px,22vw,350px)] shrink-0 overflow-y-auto border-r border-neutral-300/70 bg-cover bg-center bg-no-repeat sm:block sm:h-full"
        style={{ backgroundImage: "url('/sidebar_bg.jpeg')" }}
      >
        <Menu />
      </aside>
      <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center p-8 sm:flex sm:h-full">
        <TrueFocus {...focusProps} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col sm:hidden">
        <div
          className="flex w-full min-w-0 max-w-full justify-center border-b border-neutral-300/70 bg-cover bg-center bg-no-repeat py-4"
          style={{ backgroundImage: "url('/sidebar_bg.jpeg')" }}
        >
          <Menu />
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-10">
          <TrueFocus {...focusProps} />
        </div>
      </div>
    </div>
  );
}
