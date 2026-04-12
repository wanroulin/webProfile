"use client";

import PageShell from "@/component/PageShell";
import ProjectCard from "@/component/ProjectCard";

const projects = [
  {
    title: "政大場地預約系統",
    year: "2026",
    tags: ["User Experience", "Prototype"],
    description:
      "政大富有豐富的圖書館資源，卻常常在借閱各種討論室上出現小狀況…我們經過訪談，重新設計出適用度高、流程順暢、解決目前問題的場地預約系統。",
    imageSrc: "/register.png",
    href: "https://www.figma.com/proto/B6FQP8XqpMAW9VxhjzRWbW/%E5%A0%B4%E5%9C%B0%E9%A0%90%E7%B4%84%E7%B3%BB%E7%B5%B1?node-id=7-23&viewport=138%2C641%2C0.35&t=6YWUCPwjCh7yr11p-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1&page-id=0%3A1",
  },
  {
    title: "SignBank(永豐銀行版本)",
    year: "2026",
    tags: ["User Interface", "User Experience", "系統開發", "畢業專題"],
    description:
      "SignBank 是一款金融雙向手語翻譯系統，有別於市場一般的單向翻譯，SignBank 透過語音／文字轉手語、LLM 等技術，讓聽障能真正地在金融場域進行無障礙溝通。",
    imageSrc: "/signbank_sinopac.png",
    href: "https://www.figma.com/proto/R5sDnXY7SWuMLdLQbldwEw/%E6%B0%B8%E8%B1%90%E6%89%8B%E8%AA%9E-UI?node-id=4-34&viewport=475%2C209%2C0.07&t=99fkPfJc8QS9zY52-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=26%3A4364&page-id=0%3A1",
  },
  {
    title: "嘗洋：阿柔洋產業道路深度導覽APP",
    year: "2025",
    tags: ["User Experience", "Prototype"],
    description:
      "經過深度訪談與實地考察，嘗洋將阿柔洋產業道路的歷史茶業、宗教信仰、自然景觀等最深處的體驗帶到互動地圖上。",
    imageSrc: "/aroyang.webp",
    href: "https://www.figma.com/proto/MwZzd4dorz2PJadtaKCWi0/2025UIUX_midterm?page-id=0%3A1&node-id=22-5&starting-point-node-id=22%3A5&show-proto-sidebar=1&t=9mdw6rhbYR3o9WQD-1",
  },
  {
    title: "Taiwander",
    year: "2024",
    tags: ["User Interface", "Prototype"],
    description:
      "在異國他鄉旅遊時，思考如何排程總是令人頭痛。我們結合地圖、景點、交通、住宿，並搭配交友，讓旅遊不再孤單困難。",
    imageSrc: "/taiwander.jpg",
    href: "https://www.figma.com/proto/eGecJLFMK0pIdKb3jTEaWR/Wireframe-G4?node-id=6-128&viewport=550%2C579%2C0.17&t=ZStfIOApcUOW4VuA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A128&page-id=0%3A1",
  },
];

export default function DesignProjectPage() {
  return (
    <PageShell>
      <div className="w-full px-4 pb-20 pt-6 sm:px-8 sm:pt-10 lg:px-12">
        <header className="mb-10 w-full space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            UI / UX Design
          </h1>
        </header>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
