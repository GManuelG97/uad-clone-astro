import { data } from "@/lib/data";

export async function GET({ request }: { request: Request }) {
  const resp = await data
  return new Response(
    JSON.stringify({
      data: resp,
      message: "Global data",
      status: 200,
    }),
    {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }
  );
}
