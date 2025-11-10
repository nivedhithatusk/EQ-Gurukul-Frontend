import jwt from "jsonwebtoken";
import cookie from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "mysecret";
const COOKIE_NAME = "admin_token";

export async function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error("Error verifying token:", err);
    throw new Error("Invalid or expired token.");
  }
}

export async function setTokenCookie(res, token) {
  res.headers.set(
    "Set-Cookie",
    cookie.serialize(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    })
  );
}

export async function getTokenFromCookie(req) {
  const cookies = cookie.parse(req.headers.cookie || "");
  return cookies[COOKIE_NAME];
}

export async  function clearTokenCookie(res) {
  res.headers.set(
    "Set-Cookie",
    cookie.serialize(COOKIE_NAME, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    })
  );
}

export { COOKIE_NAME };
