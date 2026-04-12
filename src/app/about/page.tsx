"use client";

import PageShell from "@/component/PageShell";
import AboutSections from "@/component/AboutSections";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pt-10">
        <AboutSections />
      </div>
    </PageShell>
  );
}
