import { query } from "@/lib/db";
import { getTokenFromCookie, setTokenCookie, signToken } from "@/lib/auth";

export async function POST(req) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Missing credentials" }), { status: 400 });
  }

  try {
    const rows = await query("SELECT * FROM users WHERE username = ?", [username]);
    const user = rows[0];

    if (!user || password !== user.password) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }
    console.log("user password ===> ", user);

    const token = await signToken({ id: user.id, username: user.username || "", email: user.email || "" });
    console.log("token ===> ", token);

    const res = new Response(
      JSON.stringify({ ok: true, token: token, user: { id: user.id, username: user.username || "", email: user.email || "" } }),
      { status: 200 }
    );

    // Set the token cookie here
    await setTokenCookie(res, token);

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}



// const token = await getTokenFromCookie(req);

// if (!token) {
//   return new Response("Unauthorized", { status: 401 });
// }

// try {
//   const user = await verifyToken(token);
//   // Proceed with the request knowing the user is authenticated
// } catch (err) {
//   return new Response("Invalid token", { status: 401 });
// }
