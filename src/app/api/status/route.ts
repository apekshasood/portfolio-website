// Live check for the projects shown on the site: is each one up, and how fast did it answer?
// The CDN caches the answer for 60 seconds so visitors don't hammer the apps.

export const dynamic = "force-dynamic";

const targets = [
  { id: "clauseok", name: "ClauseOk", url: "https://clauseok.vercel.app" },
  { id: "convrt", name: "Convrt", url: "https://convrt.in" },
];

async function check(t: (typeof targets)[number]) {
  const started = Date.now();
  try {
    const res = await fetch(t.url, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(5000),
    });
    return { id: t.id, name: t.name, up: res.ok, ms: Date.now() - started };
  } catch {
    return { id: t.id, name: t.name, up: false, ms: null };
  }
}

export async function GET() {
  const results = await Promise.all(targets.map(check));
  return Response.json(
    { checkedAt: new Date().toISOString(), results },
    { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120" } },
  );
}
