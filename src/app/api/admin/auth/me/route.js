import { COOKIE_NAME, verifyToken } from "@/lib/auth";
import cookie from "cookie";
import { query } from "@/lib/db";

export async function GET(req) {
  try {
    const cookies = cookie.parse(req.headers.get("cookie") || "");
    const token = cookies[COOKIE_NAME];
    if (!token)
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });

    const payload = verifyToken(token);
    const pool = await query();
    const [rows] = await pool.query(
      "SELECT id, username, email FROM users WHERE id = ?",
      [payload.id]
    );
    const user = rows[0];
    if (!user)
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 401,
      });

    return new Response(JSON.stringify({ ok: true, user }));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }
}
