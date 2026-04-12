"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const GAP_PX = 12;
/** 畫面上同時可見的張數（輪播軌道可含更多張，由 marquee 循環） */
const VISIBLE_COUNT = 5;

const slides = [
  { src: "/draw.png", caption: "# draw" },
  { src: "/draw_1.jpg", caption: "# draw" },
  { src: "food.jpg", caption: "# food" },
  { src: "/廟門.JPG", caption: "# photo" },
  { src: "/虔誠.JPG", caption: "# photo" },
  { src: "/夕陽.JPG", caption: "# photo" },
  { src: "/exercise.jpg", caption: "# exercise" },
  { src: "/record.jpg", caption: "# record_life" },
  { src: "/psh.jpg", caption: "# k-pop_idol" },
];

const loopSlides = [...slides, ...slides];

export default function InterestCarousel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setCw(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slideW =
    cw > 0 ? (cw - (VISIBLE_COUNT - 1) * GAP_PX) / VISIBLE_COUNT : 0;
  /* 從第一張到第二輪第一張起點：每格後都有一個 gap（含第 7 張後接第 1 張複製） */
  const oneSetPx =
    slideW > 0 ? slides.length * (slideW + GAP_PX) : 0;

  return (
    <div className="space-y-8">
      <header className="space-y-3 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Interests
        </h1>
        <p className="font-mono text-sm text-emerald-800 md:text-base">
          System.out.print(&quot;Draw, Photo, Food, Record, K-pop&quot;);
        </p>
        <p className="text-neutral-600">
          人生名言：「吃飯不積極，思想有問題。」
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl p-2">
        <div ref={wrapRef} className="min-w-0">
          <div
            className={`interest-marquee-track flex w-max gap-3 ${slideW > 0 ? "" : "opacity-0"}`}
            style={
              {
                ["--interest-shift" as string]:
                  oneSetPx > 0 ? `${-oneSetPx}px` : "0px",
              } as React.CSSProperties
            }
          >
            {loopSlides.map((slide, i) => (
              <div
                key={`${slide.src}-${i}`}
                className="shrink-0"
                style={{
                  width: slideW > 0 ? slideW : `${100 / VISIBLE_COUNT}%`,
                  minWidth: slideW > 0 ? slideW : undefined,
                }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-neutral-800 shadow-md ring-1 ring-white/10">
                  <Image
                    src={slide.src}
                    alt={slide.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 22vw, 20vw"
                    priority={i === 0}
                    unoptimized
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 20%, transparent 40%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex h-[22%] min-h-[2.25rem] items-end justify-center rounded-b-[20px] px-1 pb-2 sm:px-2 sm:pb-3">
                    <p className="text-center text-sm font-semibold tracking-wide text-white drop-shadow sm:text-base">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
