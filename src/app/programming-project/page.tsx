"use client";

import PageShell from "@/component/PageShell";
import ProjectCard from "@/component/ProjectCard";

const projects = [
  {
    title: "SignBank",
    year: "2026",
    tags: ["User Interface", "User Experience", "系統開發", "畢業專題"],
    description:
      "SignBank 是一款金融雙向手語翻譯系統，有別於市場一般的單向翻譯，SignBank 透過語音／文字轉手語、LLM 等技術，讓聽障能真正地在金融場域進行無障礙溝通。",
    imageSrc: "/signbank.jpg",
    href: "https://youtu.be/VDus3I9AqIw",
  },
  {
    title: "政大 GPA 計算機",
    year: "2025",
    tags: ["JavaScript", "前端網頁"],
    description:
      "因為學校的校務系統改版，所以原先學生團隊的 GPA 計算器已經無法使用，同學反應後也尚未更新，所以自己有先做出來。",
    imageSrc: "/nccu-gpa-calc.png",
    href: "https://nccu-gpa-calculator.vercel.app/",
  },
  {
    title: "保護令申請遊戲",
    year: "2025",
    tags: ["JavaScript", "前端網頁"],
    description:
      "社會議題延伸，說明聲請保護令的重重難關，但到最後未必能真正生效。",
    imageSrc: "js_game.png",
    href: "https://canva.link/9sgbmwwlsgbpved",
  },
  {
    title: "時光島嶼",
    year: "2025",
    tags: ["JavaScript", "前端網頁"],
    description:
      "整合音樂、蕃茄鐘、每日代辦與甘特圖，時光島嶼讓你用自己的喜好進入心流，完整每一天。",
    imageSrc: "focus_island.png",
    href: "https://youtu.be/v5co8tIMZ2Y",
  },
  
];

export default function ProgrammingProjectPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pt-10">
        <div className="w-full min-w-0 space-y-16 py-8 lg:py-16">
          <header className="w-full space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              Development
            </h1>
            <p className="font-mono text-sm text-emerald-800 md:text-base">
              System.out.print(&quot;Development for contribution.&quot;);
            </p>
          </header>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
