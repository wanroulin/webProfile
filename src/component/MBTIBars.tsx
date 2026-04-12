"use client";

const rows = [
  { left: "E", leftPct: 23, rightPct: 77, right: "I" },
  { left: "S", leftPct: 63, rightPct: 37, right: "N" },
  { left: "F", leftPct: 32, rightPct: 68, right: "T" },
  { left: "P", leftPct: 12, rightPct: 88, right: "J" },
];

export default function MBTIBars() {
  return (
    <div className="space-y-5 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="space-y-4">
        {rows.map((row) => {
          const leftWins = row.leftPct >= row.rightPct;
          const winnerLetter = leftWins ? row.left : row.right;
          const loserLetter = leftWins ? row.right : row.left;
          const winnerPct = leftWins ? row.leftPct : row.rightPct;
          const loserPct = leftWins ? row.rightPct : row.leftPct;

          return (
            <div
              key={row.left + row.right}
              className="flex items-center gap-2 text-sm text-neutral-800 md:gap-3 md:text-base"
            >
              <span className="w-4 shrink-0 text-neutral-800 font-semibold">{winnerLetter}</span>
              <span className="w-9 shrink-0 tabular-nums text-neutral-500">
                {winnerPct}%
              </span>
              <div
                className="mx-1 flex h-2.5 min-w-0 flex-1 overflow-hidden rounded-full md:mx-2"
                role="img"
                aria-label={`${winnerLetter} ${winnerPct}%，${loserLetter} ${loserPct}%`}
              >
                <div
                  className="shrink-0 bg-neutral-500"
                  style={{ width: `${winnerPct}%` }}
                />
                <div
                  className="shrink-0 bg-neutral-200"
                  style={{ width: `${loserPct}%` }}
                />
              </div>
              <span className="w-9 shrink-0 text-right tabular-nums text-neutral-500">
                {loserPct}%
              </span>
              <span className="w-4 shrink-0 text-right font-semibold">{loserLetter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
