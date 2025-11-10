"use client";

import { use, useEffect, useState, useMemo, useRef } from "react";
import { SideBarLinks } from "@/constant/siderBarLinks";
import { notFound } from "next/navigation";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  QuickFilterModule,
} from "ag-grid-community";
import { FiSearch, FiDownload } from "react-icons/fi";
import { FormsDataApi } from "@/api/FormsDataApi";

// Register modules
ModuleRegistry.registerModules([AllCommunityModule, QuickFilterModule]);

export default function Page({ params }) {
  const imgpath = process.env.NEXT_PUBLIC_IMG_FILE;

  const { slug } = use(params);

  const currentPage = SideBarLinks.find((item) => item.path.endsWith(slug));
  if (!currentPage) notFound();

  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const gridRef = useRef();

  const columnDefs = useMemo(() => {
    return currentPage.header.map((col) => {
      if (col.field === "resume") {
        return {
          ...col,
          cellRenderer: (params) => {
            if (!params.value) return "-";
            const fileUrl = imgpath + params.value;
            const fileName = params.value.split("/").pop();
            return (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                <FiDownload title={fileName} />
              </a>
            );
          },
        };
      }
      return col;
    });
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await FormsDataApi({ formsdata: currentPage.tablename });
        if (resp.status !== 200)
          throw new Error(resp?.error || "Failed to fetch data");

        const json = await resp?.data;
        console.log("Fetched rows:", json?.data);

        setRowData(json?.data || []);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage]);

  // ✅ Export to CSV
  const onExport = () => {
    if (gridRef.current) {
      gridRef.current.api.exportDataAsCsv({
        fileName: `${currentPage.name}.csv`,
      });
    }
  };

  return (
    <div className="flex flex-col mx-4 my-4 p-6 rounded-xl shadow-xl bg-blue-50 max-w-full">
      <h1 className="text-3xl font-bold mb-6">{currentPage.name}</h1>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        {/* Search bar with icon */}
        <div className="relative w-1/3">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FiSearch />
          </span>

          <input
            type="text"
            id="searchbox"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              gridRef.current?.api.setGridOption(
                "quickFilterText",
                e.target.value
              )
            }
          />
        </div>

        {/* Export button */}
        <button
          onClick={onExport}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Export CSV
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div
          className="ag-theme-quartz"
          style={{ height: 580, width: "100%" }}
          id={currentPage.tablename}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            theme="legacy"
          />
        </div>
      )}
    </div>
  );
}
