export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

const RELEASE_AT = new Date("2026-11-24T00:05:00Z").getTime();

const ASSETS: Record<string, string | undefined> = {
  "recon-is-your-friend.gif": process.env.INTIGRITI_1126_GIF_RECON,
  "signature-window-vs-execution.gif": process.env.INTIGRITI_1126_GIF_SIGNATURE,
  "brainfuck-tape-to-stack.gif": process.env.INTIGRITI_1126_GIF_MEMORY
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ asset: string }> }
) {
  if (Date.now() < RELEASE_AT) {
    return new Response("Not Found", {
      status: 404,
      headers: { "Cache-Control": "no-store" }
    });
  }

  const { asset } = await context.params;
  const encoded = ASSETS[asset];

  if (!encoded || !/^[A-Za-z0-9+/=]+$/.test(encoded)) {
    return new Response("Not Found", {
      status: 404,
      headers: { "Cache-Control": "no-store" }
    });
  }

  return new Response(Buffer.from(encoded, "base64"), {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Content-Length": String(Buffer.from(encoded, "base64").byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
