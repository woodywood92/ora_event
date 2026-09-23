import React from "react";
import { useSite } from "../context/SiteContext";

export default function Footer() {
  const { t } = useSite();
  return (
    <footer className="px-6 md:px-10 py-8 text-xs text-gray-500 dark:text-[#6b6b6b] flex justify-between max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
      <span>{t.footer}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
