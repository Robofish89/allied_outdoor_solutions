"use client";

import { usePDF } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import { DownloadIcon } from "./PDFDownloadButton";

export default function PDFButtonInner() {
  const [instance] = usePDF({ document: <PDFDocument /> });

  if (instance.loading) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg bg-allied-gold/50 px-8 py-3 font-sans text-sm font-semibold tracking-wide text-allied-navy">
        <DownloadIcon />
        Preparing PDF...
      </span>
    );
  }

  if (instance.error) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg bg-red-200 px-8 py-3 font-sans text-sm font-semibold tracking-wide text-red-900">
        PDF generation failed
      </span>
    );
  }

  return (
    <a
      href={instance.url!}
      download="allied-ai-strategy.pdf"
      className="inline-flex items-center gap-2 rounded-lg bg-allied-gold px-8 py-3 font-sans text-sm font-semibold tracking-wide text-allied-navy transition hover:bg-allied-gold/90"
    >
      <DownloadIcon />
      Download PDF
    </a>
  );
}
