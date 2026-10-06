import { Play } from "lucide-react";
import type { CaseStudyVideo } from "@/lib/portfolio-data";

interface VideoShowcaseProps {
  video: CaseStudyVideo;
  /** Optional caption/lead-in text shown above the player */
  heading?: string;
}

/**
 * Reusable video showcase for project walkthroughs and demos.
 * Never autoplays; lazy loads (preload="none"); uses poster image.
 */
export function VideoShowcase({ video, heading }: VideoShowcaseProps) {
  return (
    <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
      {heading && (
        <figcaption className="flex items-center gap-2 px-5 py-3 border-b border-slate-100 text-sm font-medium text-slate-700">
          <Play size={15} className="text-primary" />
          {heading}
        </figcaption>
      )}
      <video
        controls
        preload="none"
        poster={video.poster}
        className="w-full aspect-video bg-slate-900"
        playsInline
      >
        <source src={video.src} />
        {video.captions && (
          <track
            kind="captions"
            src={video.captions}
            srcLang="id"
            label="Bahasa Indonesia"
            default
          />
        )}
        Browser Anda tidak mendukung pemutaran video.{" "}
        <a href={video.src} className="text-primary underline">
          Unduh video
        </a>
        .
      </video>
      <p className="px-5 py-3 text-sm text-slate-500">{video.description}</p>
    </figure>
  );
}
