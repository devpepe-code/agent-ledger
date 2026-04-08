import { Bot, Eye, Lock } from "lucide-react";

export const marketingSolutionSteps = [
  {
    n: "1",
    title: "Your agent acts",
    icon: Bot,
    body: "Your AI agent makes a decision, calls an API, sends a message, or triggers an automation. AgentLedger captures it instantly.",
  },
  {
    n: "2",
    title: "We seal it permanently",
    icon: Lock,
    body: "Every event gets a cryptographic fingerprint and is anchored on Solana. Once recorded, nobody — not even us — can change it.",
  },
  {
    n: "3",
    title: "You see everything",
    icon: Eye,
    body: "Your dashboard shows every event in plain language. Need proof for legal, regulators, or investors? It's one click away.",
  },
] as const;

/** Solution intro + 3-step grid — lives under the hero headline. */
export function MarketingSolutionHeroBlock() {
  return (
    <div
      id="how-it-works"
      className="mt-10 w-full max-w-6xl scroll-mt-28 sm:mt-14 md:mt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
          A permanent record of everything
          <br />
          your agents do.
        </h2>
      </div>

      <div className="relative mt-10 grid gap-10 sm:mt-12 md:grid-cols-3 md:gap-6">
        <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-0 border-t border-dashed border-white/15 md:block lg:left-[16%] lg:right-[16%] lg:top-10" />

        {marketingSolutionSteps.map((step) => (
          <div
            key={step.n}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#7C3AED]/30 to-[#06B6D4]/20 shadow-lg sm:mb-5 sm:h-14 sm:w-14">
              <step.icon
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
                strokeWidth={1.75}
              />
            </div>
            <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
              {step.n}
            </span>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55 sm:mt-3">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
