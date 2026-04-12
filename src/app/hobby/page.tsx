"use client";

import PageShell from "@/component/PageShell";
import InterestCarousel from "@/component/InterestCarousel";
import ProjectCard from "@/component/ProjectCard";

const hobbyProjectCards = [
  {
    title: "禁止暈船！",
    year: "2024",
    tags: ["Draw", "Procreate"],
    description:
      "一紙獨一無二的生日賀卡，祝朋友不再暈船。",
    imageSrc: "/draw.png",
    href: "/draw.png",
  },
  {
    title: "虔誠",
    year: "2026",
    tags: ["photo", "ZVE10"],
    description:
      "廟，就是一個可以寧靜人心的地方。",
    imageSrc: "/虔誠.JPG",
    href: "/虔誠.JPG",
  },
  {
    title: "廟門",
    year: "2026",
    tags: ["photo", "ZVE10"],
    description:
      "光影投射，希望在前。",
    imageSrc: "/廟門.JPG",
    href: "/廟門.JPG",
  },
  {
    title: "夕陽",
    year: "2026",
    tags: ["photo", "ZVE10"],
    description:
      "偶爾抬頭，斑駁的牆面也有光。",
    imageSrc: "/夕陽.JPG",
    href: "/夕陽.JPG",
  },
  {
    title: "畢業快樂",
    year: "2026",
    tags: ["photo", "ZVE10"],
    description:
      "學姊畢業快樂呀！！！",
    imageSrc: "/graduate.jpg",
    href: "/graduate.jpg",
  },
];

export default function HobbyPage() {
  return (
    <PageShell>
      <div className="w-full space-y-10 px-4 pb-20 pt-6 sm:px-8 sm:pt-10 lg:px-12">
        <InterestCarousel />
        <div className="grid gap-8 sm:grid-cols-2">
          {hobbyProjectCards.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
