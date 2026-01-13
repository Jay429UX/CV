"use client";

import { FileDown } from "lucide-react";

export function PdfExport() {
  const handleExport = () => {
    window.print();
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-muted transition-colors"
      aria-label="Export to PDF"
    >
      <FileDown className="h-4 w-4" />
      <span>Export PDF</span>
    </button>
  );
}
