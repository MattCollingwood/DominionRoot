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
      className="group relative block overflow-hidden rounded-md border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:glow-cyan"
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
        
        {/* Play button - smaller */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center glow-cyan">
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute w-full h-1 bg-gradient-to-b from-primary/50 to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Info - reduced padding and font sizes */}
      <div className="p-2">
        <h3 className="font-body font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {views && (
          <p className="text-xs text-muted-foreground mt-0.5">{views} views</p>
        )}
      </div>

      {/* Corner accent - smaller */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}