import { Button } from "@/components/ui/button";
import { VideoCarousel } from "@/components/VideoCarousel";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight, Play, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import wallpaper from "@/assets/wp4014080-waypoint-wallpapers.png";
import { useYouTubeShorts } from "@/hooks/useYouTubeShorts";
import { useTikTokLiveStatus } from "@/hooks/useTikTokLiveStatus";
import { useHaloVsVideos, useHaloLoreVideos } from "@/hooks/useYouTubeVideosByTag";

const Index = () => {
  const { data: shorts, isLoading, error } = useYouTubeShorts();
  const { data: liveStatus } = useTikTokLiveStatus();
  
  // New hooks for filtered videos
  const { data: haloVsVideos, isLoading: isLoadingVs, error: errorVs } = useHaloVsVideos();
  const { data: haloLoreVideos, isLoading: isLoadingLore, error: errorLore } = useHaloLoreVideos();

  const showLiveBadge = liveStatus?.isLive ?? import.meta.env.DEV;

  // Split shorts into two sections
  const recentShorts = shorts?.slice(0, 6) || [];
  const topShorts = shorts
    ? [...shorts].sort((a, b) => b.viewCount - a.viewCount).slice(0, 6)
    : [];

  // Format the filtered videos for VideoCarousel
  const haloVsCarouselVideos = haloVsVideos?.map(video => ({
    id: video.id,
    title: video.title,
    thumbnail: video.thumbnail,
    videoUrl: video.videoUrl,
    views: "N/A", // Optional: you can add view count if needed
    viewCount: 0
  })) || [];

  const haloLoreCarouselVideos = haloLoreVideos?.map(video => ({
    id: video.id,
    title: video.title,
    thumbnail: video.thumbnail,
    videoUrl: video.videoUrl,
    views: "N/A",
    viewCount: 0
  })) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={wallpaper}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="absolute inset-0 gradient-halo" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          {showLiveBadge && (
            <div className="animate-float">
              <a 
                href="https://www.tiktok.com/@dominionroot/live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-sm font-body text-primary uppercase tracking-wider">
                    Live on TikTok
                  </span>
                </div>
              </a>
            </div>
          )}

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="text-foreground">DOMINION </span>
            <span className="text-primary text-glow-cyan">ROOT</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Making Halo's deep lore, fun!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="halo" size="lg" asChild>
              <a
                href="https://www.youtube.com/@DominionRoot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
                Subscribe Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* Recent Shorts Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Latest Shorts"
            subtitle="Check out the most recent content from the channel"
          />

          {isLoading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading latest shorts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading videos. Please try again later.</p>
            </div>
          )}

          {!isLoading && !error && recentShorts.length > 0 && (
            <VideoCarousel videos={recentShorts} />
          )}
        </div>
      </section>

      {/* More Shorts Section */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Popular Content"
            subtitle="Explore the highlights"
          />

          {!isLoading && !error && topShorts.length > 0 && (
            <VideoCarousel videos={topShorts} />
          )}

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.youtube.com/@DominionRoot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5" />
                View All on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Halo Vs Section - NOW FILTERED BY TAG */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Halo vs. Series"
            subtitle="Epic showdowns transcending the galaxies"
          />

          {isLoadingVs && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading Halo VS videos...</p>
            </div>
          )}

          {errorVs && (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading Halo VS videos.</p>
            </div>
          )}

          {!isLoadingVs && !errorVs && haloVsCarouselVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No Halo VS videos found. Make sure videos are tagged with "halovs" in YouTube Studio.
              </p>
            </div>
          )}

          {!isLoadingVs && !errorVs && haloVsCarouselVideos.length > 0 && (
            <VideoCarousel videos={haloVsCarouselVideos} />
          )}

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.youtube.com/@DominionRoot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5" />
                View All on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Halo Lore Section - NOW FILTERED BY TAG */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Halo Lore"
            subtitle="Dive into the rich history"
          />

          {isLoadingLore && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading Halo Lore videos...</p>
            </div>
          )}

          {errorLore && (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading Halo Lore videos.</p>
            </div>
          )}

          {!isLoadingLore && !errorLore && haloLoreCarouselVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No Halo Lore videos found. Make sure videos are tagged with "hlore" in YouTube Studio.
              </p>
            </div>
          )}

          {!isLoadingLore && !errorLore && haloLoreCarouselVideos.length > 0 && (
            <VideoCarousel videos={haloLoreCarouselVideos} />
          )}

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.youtube.com/@DominionRoot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5" />
                View All on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-halo" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Join the <span className="text-primary text-glow-cyan">Community</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Be part of the Dominion Root family. Connect with fellow Spartans, 
              get exclusive updates, and never miss an epic moment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="halo" size="lg" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <Link to="/events">
                  Upcoming Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;