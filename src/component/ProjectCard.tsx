"use client";

import Image from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  year: string;
  tags: string[];
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
};

export default function ProjectCard({
  title,
  year,
  tags,
  description,
  imageSrc,
  imageAlt,
  href,
}: ProjectCardProps) {
  const external = /^https?:\/\//i.test(href);

  return (
    <Link
      href={href}
      scroll={href === "#" ? false : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${title}，${year}`}
      className="group relative block aspect-[4/3] w-full min-h-[12rem] cursor-pointer overflow-hidden rounded-2xl bg-neutral-800 shadow-md ring-1 ring-black/5 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 sm:min-h-[14rem]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105 group-focus-within:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 md:p-5">
        <p className="font-mono text-xs text-white/80">{year}</p>
        <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm md:text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex min-h-0 flex-col justify-end overflow-y-auto bg-black/65 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:p-6">
        <p className="font-mono text-xs text-white/70">{year}</p>
        <h3 className="mt-1 shrink-0 text-xl font-semibold text-white">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/25"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/95">{description}</p>
      </div>
    </Link>
  );
}
