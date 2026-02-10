"use client";

import dynamic from "next/dynamic";

/* ── Inner component loaded with ssr:false ─────────────────────────── */

const PDFButton = dynamic(
  () =>
    import("./PDFButtonInner").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <span className="inline-flex items-center gap-2 rounded-lg bg-allied-gold/50 px-8 py-3 font-sans text-sm font-semibold tracking-wide text-allied-navy">
        <DownloadIcon />
        Download PDF
      </span>
    ),
  }
);

/* ── Download icon (inline SVG) ────────────────────────────────────── */

export function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function PDFDownloadButton() {
  return <PDFButton />;
}
