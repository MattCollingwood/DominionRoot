import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  views?: string;
}

export function VideoCard({ title, thumbnail, videoUrl, views }: VideoCardProps) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:glow-cyan"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-cyan">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute w-full h-1 bg-gradient-to-b from-primary/50 to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {views && (
          <p className="text-sm text-muted-foreground mt-1">{views} views</p>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}
