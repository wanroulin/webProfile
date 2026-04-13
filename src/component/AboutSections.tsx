"use client";

import MBTIBars from "@/component/MBTIBars";

function QuoteRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div
        className="w-1 shrink-0 self-stretch rounded-full bg-neutral-300"
        aria-hidden
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export default function AboutSections() {
  return (
    <div className="w-full min-w-0 space-y-16 pt-8 pb-24 lg:pt-16 lg:pb-24">
      <section id="about-intro" className="scroll-mt-24 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          About Me
        </h1>
        <p className="font-mono text-sm text-emerald-800 md:text-base">
          System.out.print(&quot;2003, Taichung, Taiwan.&quot;);
        </p>
      </section>

      <div className="grid scroll-mt-24 gap-10 md:grid-cols-2 md:items-start md:gap-8 lg:gap-12">
        <section id="about-education" className="scroll-mt-24 min-w-0 space-y-6">
          <h2 className="text-xl font-semibold text-neutral-900">Information</h2>
          <div className="space-y-4">
            <QuoteRow>
              <p className="text-sm font-medium text-neutral-500">2022–2026</p>
              <p className="mt-2 text-neutral-800">
                國立政治大學 資訊管理學系 Management of Information System
              </p>
              <p className="text-neutral-800">
                國立政治大學 英語商管學程 English Taught Program
              </p>
            </QuoteRow>
            <QuoteRow>
              <p className="text-sm font-medium text-neutral-500">2024–Now</p>
              <p className="mt-2 text-neutral-800">
                國立政治大學 數位內容與科技學士學位學程 Digital Contents and Technologies
              </p>
            </QuoteRow>
          </div>
        </section>

        <section id="about-mbti" className="scroll-mt-24 min-w-0">
          <MBTIBars />
        </section>
      </div>

      <section id="about-work" className="scroll-mt-24">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">Work Experience</h2>
          <ul className="m-0 list-none space-y-4 p-0 text-neutral-700">
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2026</span>
                  <span>Web 程式設計 TA</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <span>簡士鎰副教授 HAILAB 研究助理</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <span>熊熊幹大事 暑期 UIUX 實習生</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2023–2025</span>
                  <span>英文家教</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2024</span>
                  <span>蘋果芽數位科技兒童程式助教</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2024</span>
                  <span>姜子鵬補習班英文老師</span>
                </div>
              </QuoteRow>
            </li>
          </ul>
        </div>
      </section>

      <section id="about-lead" className="scroll-mt-24">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">Lead Experience</h2>
          <ul className="m-0 list-none space-y-4 p-0 text-neutral-700">
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2026</span>
                  <span>數位內容與科技第十七屆畢業展覽《s:ync》副召</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2024</span>
                  <span>數位平台見習展覽《污漬》策展組長</span>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2024</span>
                  <span>國立政治大學資訊管理學系系學會秘書部部長</span>
                </div>
              </QuoteRow>
            </li>
          </ul>
        </div>
      </section>

      <section id="about-award" className="scroll-mt-24">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">Award Experience</h2>
          <ul className="m-0 list-none space-y-4 p-0 text-neutral-700">
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2026</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>23th 育秀盃創意獎 數位應用組 | 決賽入圍（尚未公佈）</span>
                    <span className="font-mono text-sm text-neutral-500">
                      SignBank 數位金融手語翻譯系統
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2026</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>5th AI 金融科技創新創意競賽 | 亞軍</span>
                    <span className="font-mono text-sm text-neutral-500">
                      SignBank 數位金融手語翻譯系統
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>政大資管 111 級畢業發表 | 第一銀行特別獎冠軍</span>
                    <span className="font-mono text-sm text-neutral-500">
                      SignBank 數位金融手語翻譯系統
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>政大資管 111 級畢業發表 | 下午場冠軍</span>
                    <span className="font-mono text-sm text-neutral-500">
                      SignBank 數位金融手語翻譯系統
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>政大 114 年 AI 跨域 X 永續創新競賽 | 冠軍</span>
                    <span className="font-mono text-sm text-neutral-500">
                      SignBank 數位金融手語翻譯系統
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>政大 114 年 AI 跨域研究構想補助計畫 | 通過</span>
                    <span className="font-mono text-sm text-neutral-500">
                      基於 Mediapipe 與 Blender 進行手語辨識資料增強之方法探討
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
            <li>
              <QuoteRow>
                <div className="flex gap-3">
                  <span className="w-14 shrink-0 font-mono text-xs text-neutral-500">2025</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span>2025 熊熊幹大事 Web 前端黑客松獎金挑戰賽 | 冠軍</span>
                    <span className="font-mono text-sm text-neutral-500">
                      Focus Island 時光島嶼
                    </span>
                  </div>
                </div>
              </QuoteRow>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
