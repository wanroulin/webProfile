"use client";

import Image from "next/image";
import Link from "next/link";

const AVATAR = "w-[clamp(5.5rem,18vw,9.375rem)]";

const navItems = [
  { href: "/about", zh: "關於我", en: "About Me" },
  { href: "/hobby", zh: "我的興趣", en: "Interest" },
  { href: "/programming-project", zh: "系統開發", en: "Development" },
  { href: "/design-project", zh: "UIUX 設計", en: "UIUX Design" },
] as const;

const navCardClass =
  "relative overflow-hidden rounded-md bg-cover bg-center bg-no-repeat p-[clamp(0.65rem,1.8vw,1rem)] text-center text-white shadow-md ring-1 ring-white/20 transition hover:brightness-110";

export default function Menu() {
  return (
    <div className="mx-auto flex min-h-full h-full w-full max-w-[min(100%,350px)] flex-col items-center bg-transparent p-[clamp(0.75rem,2vw,1rem)] text-center sm:mx-0 sm:max-w-none sm:w-full">
      <div className="flex w-full justify-center">
        <div
          className={`relative mt-4 aspect-square shrink-0 overflow-hidden rounded-full bg-gray-200 sm:mt-4 ${AVATAR}`}
        >
          <Link href="/" className="absolute inset-0 block">
            <Image
              src="/profile_square.jpg"
              alt="頭像"
              fill
              className="object-cover object-center scale-110"
              sizes="(max-width:640px) 120px, 180px"
              unoptimized
            />
          </Link>
        </div>
      </div>

      <div className="mt-6 w-full text-[clamp(1.1rem,2.8vw,1.5rem)] font-medium leading-tight">
        林宛柔
      </div>
      <div className="mt-1 w-full text-[clamp(0.95rem,2.2vw,1.25rem)] text-neutral-700">@leona</div>
      <div className="mt-2 w-full text-[clamp(0.8rem,1.8vw,1rem)] text-neutral-600">
        NCCU｜MIS X DCT X ETP
      </div>

      <div className="mt-5 mb-7 flex w-full flex-wrap justify-center gap-x-4 gap-y-2 text-[clamp(0.8rem,1.6vw,0.95rem)]">
        <Link href="mailto:rosalin200311@gmail.com" className="underline-offset-2 hover:underline">
          <Image src="/email.png" alt="Email" width={40} height={40} />
        </Link>
        <Link href="https://www.instagram.com/wj._lin/" className="underline-offset-2 hover:underline">
          <Image src="/instagram.png" alt="Instagram" width={42} height={42} />
        </Link>
        <Link href="https://www.linkedin.com/in/宛柔-林-a1112125b" className="underline-offset-2 hover:underline">
          <Image src="/linkedin.png" alt="LinkedIn" width={42} height={42} />
        </Link>
        <Link href="https://www.instagram.com/yiiiyiii_photograph/" className="underline-offset-2 hover:underline">
          <Image src="/camera.png" alt="LinkedIn" width={42} height={42} />
        </Link>
      </div>

      <nav className="flex w-full flex-col items-center gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block w-full max-w-full">
            <div
              className={navCardClass}
              style={{ backgroundImage: "url('/link_bg.jpeg')" }}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-black/35"
                aria-hidden
              />
              <div className="relative z-10">
                <p className="mb-1 text-lg font-bold drop-shadow-md">{item.zh}</p>
                <p className="text-sm text-white/95 drop-shadow-md sm:text-base">{item.en}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
