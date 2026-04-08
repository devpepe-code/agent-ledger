const isDev = process.env.NODE_ENV === "development";

export const logger = {
  log: (...args: unknown[]): void => {
    if (isDev) console.log("[AgentLedger]", ...args);
  },
  warn: (...args: unknown[]): void => {
    console.warn("[AgentLedger]", ...args);
  },
  error: (...args: unknown[]): void => {
    console.error("[AgentLedger]", ...args);
  },
};
