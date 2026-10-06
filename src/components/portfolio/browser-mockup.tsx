import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  sizes?: string;
}

/** Desktop browser frame around a real project screenshot. */
export function BrowserMockup({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 1024px",
}: BrowserMockupProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {url && (
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-500 text-center truncate border border-slate-200">
              {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </div>
          </div>
        )}
      </div>
      {/* Screenshot */}
      <div className="relative w-full aspect-video bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
