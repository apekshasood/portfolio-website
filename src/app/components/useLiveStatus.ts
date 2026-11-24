"use client";

import { useEffect, useState } from "react";

export type LiveResult = { id: string; name: string; up: boolean; ms: number | null };

// Reads /api/status once per page view.
export function useLiveStatus() {
  const [results, setResults] = useState<LiveResult[] | null>(null);
  useEffect(() => {
    let alive = true;
    fetch("/api/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => alive && d && setResults(d.results))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return results;
}

export function statusLine(results: LiveResult[] | null, id: string, name: string) {
  const r = results?.find((x) => x.id === id);
  if (!results) return `Checking ${name}…`;
  if (!r || !r.up) return `${name} didn't answer just now.`;
  return `${name} is up: answered in ${r.ms} ms.`;
}
