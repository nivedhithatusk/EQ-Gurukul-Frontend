"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardPageApi } from "@/api/DashboardPageApi";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DashboardPageApi();

        if (response.status !== 200) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching insights:", error);
        toast.error("Failed to load dashboard data");
      }
    };

    fetchData();
  }, []);

  if (!data) return <p className="p-6 text-gray-500">Loading Dashboard...</p>;

  const categories = {
    admission: "Admission",
    alumni: "Alumni Club",
    career: "Career",
    contact: "Contact Us",
    reachus: "Reach Us",
  };

  const palette = ["#1e40af", "#3b82f6", "#059669", "#DC2626", "#9333EA"];

  // 🔹 Build continuous dates (last 6 months)
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  const allDates = [];
  for (let d = new Date(sixMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
    allDates.push(d.toISOString().split("T")[0]); // YYYY-MM-DD
  }

  // ✅ Top summary cards
  const summaryCards = Object.entries(categories).map(([key, label]) => (
    <div
      key={key}
      className="bg-white shadow rounded-xl p-4 text-center border border-gray-100"
    >
      <h3 className="text-lg font-semibold">Total {label}</h3>
      <p className="text-2xl font-bold text-gray-900">
        {data[key].total_count ?? 0}
      </p>
    </div>
  ));

  // ✅ Daywise Records (with 0 for missing dates)
  const daywiseOptions = {
    chart: { type: "line", height: 350 },
    xaxis: { categories: allDates },
    stroke: { curve: "smooth", width: 2 },
    colors: palette,
    title: { text: "Daywise Records (Last 6 Months)", align: "center" },
  };

  // ✅ Daywise Records (with 0 for missing dates)
  // const daywiseOptions = {
  //   chart: { type: "line", height: 350 },
  //   xaxis: { categories: allDates },
  //   stroke: { curve: "smooth" },
  //   title: { text: "Daywise Records (Last 6 Months)", align: "center" },
  // };

  const daywiseSeries = Object.entries(categories).map(([key, label]) => {
    return {
      name: label,
      data: allDates.map((date) => {
        const record = data[key].daywise.find((d) => {
          // normalize DB date
          const dbDate = new Date(d.day).toISOString().split("T")[0];
          return dbDate === date;
        });
        return record ? record.total_records : 0;
      }),
    };
  });

  // ✅ Reach Us - Branchwise
  const branchLabels = data.reachus.branchwise.map((b) => b.branch);
  const branchCounts = data.reachus.branchwise.map((b) => b.branch_count);
  const branchOptions = {
    chart: { type: "bar", height: 300 },
    xaxis: { categories: branchLabels },
    colors: ["#10B981"],
    title: { text: "Reach Us - Branch-wise Data", align: "center" },
  };
  const branchSeries = [{ name: "Branches", data: branchCounts }];

  // ✅ Total Counts by Category
  const totalOptions = {
    chart: { type: "bar", height: 300 },
    xaxis: { categories: Object.values(categories) },
    colors: ["#ec4899"],
    title: { text: "Total Counts by Category", align: "center" },
    dataLabels: { enabled: true },
  };
  const totalSeries = [
    {
      name: "Total",
      data: Object.keys(categories).map((key) => data[key].total_count),
    },
  ];

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

        {/* Top summary cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">{summaryCards}</div>

        {/* Daywise Records */}
        <div className="bg-white shadow rounded-xl p-4 mb-8">
          <Chart
            options={daywiseOptions}
            series={daywiseSeries}
            type="line"
            height={350}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Branchwise */}
          <div className="bg-white shadow rounded-xl p-4">
            <Chart
              options={branchOptions}
              series={branchSeries}
              type="bar"
              height={300}
            />
          </div>

          {/* Totals by Category */}
          <div className="bg-white shadow rounded-xl p-4">
            <Chart
              options={totalOptions}
              series={totalSeries}
              type="bar"
              height={300}
            />
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
