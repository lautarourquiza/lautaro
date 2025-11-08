import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={
        "group relative rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden " +
        className
      }
    >
      {/* subtle gradient gloss */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10" />
      <div className="relative p-5 md:p-6">{children}</div>
    </div>
  );
}
