import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  sizes?: string;
}

/** Smartphone frame showing the real project screenshot (top-cropped). */
export function PhoneMockup({
  src,
  alt,
  sizes = "(max-width: 640px) 60vw, 240px",
}: PhoneMockupProps) {
  return (
    <div className="mx-auto w-full max-w-[240px]">
      <div className="rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="relative bg-slate-800 pt-2 pb-1">
          <div className="mx-auto w-20 h-4 rounded-full bg-slate-900" />
        </div>
        <div className="relative w-full aspect-[9/19] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
