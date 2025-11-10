import { query } from "@/lib/db";

export async function GET(request) {
  return new Response(JSON.stringify({ message: "Fetched data" }), {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const { formsdata } = await request.json();

    const rows = await query(
      `SELECT * FROM ${formsdata} ORDER BY created_at DESC`
    );

    return new Response(JSON.stringify({ success: true, data: rows }), {
      status: 200,
    });
  } catch (err) {
    console.error("DB error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
}
