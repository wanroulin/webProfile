"use client";

import Image from "next/image";
import Link from "next/link";

/** 手機維持 vw；桌機放大但以 dvh 上限，避免超出視窗時主版面被撑開 */
const AVATAR =
  "aspect-square w-[clamp(5.5rem,18vw,9.375rem)] sm:mt-0 sm:w-[min(6.75rem,26dvh)] sm:max-w-[92%]";

const navItems = [
  { href: "/about", zh: "關於我", en: "About Me" },
  { href: "/hobby", zh: "我的興趣", en: "Interest" },
  { href: "/programming-project", zh: "系統開發", en: "Development" },
  { href: "/design-project", zh: "UIUX 設計", en: "UIUX Design" },
] as const;

const navCardClass =
  "relative overflow-hidden rounded-md bg-cover bg-center bg-no-repeat text-center text-white shadow-md ring-1 ring-white/20 transition hover:brightness-110 p-[clamp(0.65rem,1.8vw,1rem)] sm:p-3 sm:py-2.5";

const socialImg = "h-10 w-10 object-contain sm:h-10 sm:w-10";

export default function Menu() {
  return (
    <div className="mx-auto flex w-full max-w-[min(100%,350px)] flex-col items-center gap-6 overflow-x-hidden bg-transparent p-[clamp(0.75rem,2vw,1rem)] text-center sm:mx-0 sm:min-h-full sm:max-w-none sm:w-full sm:gap-5 sm:overflow-visible sm:px-3 sm:py-5 lg:gap-6 lg:py-6">
      <div className="flex w-full shrink-0 flex-col items-center sm:gap-0">
        <div className="flex w-full justify-center">
          <div
            className={`relative mt-4 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:mt-0 ${AVATAR}`}
          >
            <Link href="/" className="absolute inset-0 block">
              <Image
                src="/profile_square.jpg"
                alt="頭像"
                fill
                className="object-cover object-center scale-110"
                sizes="(max-width:640px) 120px, 112px"
                unoptimized
              />
            </Link>
          </div>
        </div>

        <div className="mt-4 w-full text-[clamp(1.1rem,2.8vw,1.5rem)] font-medium leading-tight sm:mt-2 sm:text-lg">
          林宛柔
        </div>
        <div className="mt-0.5 w-full text-[clamp(0.95rem,2.2vw,1.25rem)] text-neutral-700 sm:text-base">
          @leona
        </div>
        <div className="mt-1 w-full text-[clamp(0.8rem,1.8vw,1rem)] leading-snug text-neutral-600 sm:text-sm">
          NCCU｜MIS X DCT X ETP
        </div>

        <div className="mt-4 flex w-full flex-wrap justify-center gap-x-3 gap-y-1.5 sm:mt-3 sm:gap-x-3">
          <Link href="mailto:rosalin200311@gmail.com" className="underline-offset-2 hover:underline">
            <Image
              src="/email.png"
              alt="Email"
              width={40}
              height={40}
              className={socialImg}
              unoptimized
            />
          </Link>
          <Link href="https://www.instagram.com/wj._lin/" className="underline-offset-2 hover:underline">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={42}
              height={42}
              className={socialImg}
              unoptimized
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/宛柔-林-a1112125b"
            className="underline-offset-2 hover:underline"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={42}
              height={42}
              className={socialImg}
              unoptimized
            />
          </Link>
          <Link
            href="https://www.instagram.com/yiiiyiii_photograph/"
            className="underline-offset-2 hover:underline"
          >
            <Image src="/camera.png" alt="攝影" width={42} height={42} className={socialImg} unoptimized />
          </Link>
        </div>
      </div>

      <nav className="flex w-full shrink-0 flex-col items-center gap-3.5 sm:gap-3">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block w-full max-w-full shrink-0">
            <div
              className={navCardClass}
              style={{ backgroundImage: "url('/link_bg.jpeg')" }}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-black/35"
                aria-hidden
              />
              <div className="relative z-10">
                <p className="mb-0.5 text-base font-bold drop-shadow-md sm:mb-1 sm:text-lg">{item.zh}</p>
                <p className="text-xs text-white/95 drop-shadow-md sm:text-sm sm:leading-snug">{item.en}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
