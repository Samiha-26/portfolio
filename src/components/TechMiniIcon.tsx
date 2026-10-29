export default function TechMiniIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim();

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.5l-4.74-6.83v6.83H9.2v-9h1.38l4.74 6.83V7.5h1.38v9h-1.38z" />
      </svg>
    );
  }

  // React
  if (n.includes("react")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7c-5.33 0-8 3.58-8 7.5 0 2.37 1 4.5 2.66 6.01C4.85 16.92 4 19 4 19s2.08-.85 3.49-2.66C8.5 17 9.63 17 12 17c5.33 0 8-3.58 8-7.5S17.33 2 12 2zm0 13c-2.03 0-3.5-.66-4.59-1.53.94-.78 2.32-1.47 4.59-1.47s3.65.69 4.59 1.47C15.5 14.34 14.03 15 12 15z" />
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#3178C6] text-white flex items-center justify-center font-mono font-black text-[8px] shrink-0 leading-none">
        TS
      </span>
    );
  }

  // JavaScript
  if (n.includes("javascript")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#F7DF1E] text-black flex items-center justify-center font-mono font-black text-[8px] shrink-0 leading-none">
        JS
      </span>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // DaisyUI
  if (n.includes("daisy")) {
    return <span className="text-xs shrink-0 leading-none">🌼</span>;
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#5FA04E]/20 text-[#5FA04E] border border-[#5FA04E]/40 flex items-center justify-center font-mono font-bold text-[8px] shrink-0 leading-none">
        N
      </span>
    );
  }

  // Express.js
  if (n.includes("express")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-slate-500/20 text-slate-300 border border-slate-500/40 flex items-center justify-center font-mono font-bold text-[8px] shrink-0 leading-none">
        ex
      </span>
    );
  }

  // MongoDB
  if (n.includes("mongo")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C11.8 0 11.2.6 11 .8 7.4 4.6 5.8 8.4 6 12.8c.2 4.4 2.8 7.6 5.8 11.2h.4c3-3.6 5.6-6.8 5.8-11.2.2-4.4-1.4-8.2-5-12-.2-.2-.8-.8-1-.8zm0 2.4c.2.2.4.4.6.7 2.8 3.2 4.2 6.4 4 10-.2 3.6-2.4 6.2-4.6 9.1-2.2-2.9-4.4-5.5-4.6-9.1-.2-3.6 1.2-6.8 4-10 .2-.3.4-.5.6-.7z"/>
      </svg>
    );
  }

  // REST API
  if (n.includes("api") || n.includes("rest")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#06B6D4]/20 text-[#22D3EE] border border-[#06B6D4]/40 flex items-center justify-center font-mono font-bold text-[7px] shrink-0 leading-none">
        API
      </span>
    );
  }

  // JWT
  if (n.includes("jwt")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#D63AFF]/20 text-[#D63AFF] border border-[#D63AFF]/40 flex items-center justify-center font-mono font-bold text-[7px] shrink-0 leading-none">
        JWT
      </span>
    );
  }

  return (
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
  );
}
