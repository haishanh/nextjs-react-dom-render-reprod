import { render } from "./render";

export async function GET() {
  const html = render();
  return new Response(html, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
