import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const forms = {
      admission: "admissionform",
      alumni: "alumniclubform",
      career: "careerform",
      contact: "contactform",
      reachus: "reachusform",
    };

    const data = {};

    // Loop through all forms
    for (const [key, table] of Object.entries(forms)) {
      // 🔹 Total count
      const [total] = await query(
        `SELECT COUNT(*) AS total_count FROM ${table}`
      );
      data[key] = { total_count: total.total_count };

      // 🔹 Day-wise records (last 6 months)
      const daywise = await query(
        `SELECT DATE(created_at) AS day, COUNT(*) AS total_records
         FROM ${table}
         WHERE created_at >= CURDATE() - INTERVAL 6 MONTH
         GROUP BY DATE(created_at)
         ORDER BY day ASC`
      );
      data[key].daywise = daywise;

      // 🔹 Month-wise records (last 6 months)
      const monthwise = await query(
        `SELECT DATE_FORMAT(created_at, '%Y-%m') AS month, COUNT(*) AS total_records
         FROM ${table}
         WHERE created_at >= CURDATE() - INTERVAL 6 MONTH
         GROUP BY month
         ORDER BY month ASC`
      );
      data[key].monthwise = monthwise;
    }

    // 🔹 Branch-wise only for Reach Us
    const branchwise = await query(
      `SELECT branch, COUNT(*) AS branch_count
       FROM reachusform
       GROUP BY branch`
    );
    data.reachus.branchwise = branchwise;

    return NextResponse.json(data);
  } catch (err) {
    console.error("FetchInsights API error:", err);
    return NextResponse.json(
      { error: "Failed to load insights" },
      { status: 500 }
    );
  }
}
