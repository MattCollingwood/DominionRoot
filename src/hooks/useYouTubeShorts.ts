import { useQuery } from "@tanstack/react-query";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
}

const CHANNEL_ID = "UCm_nQCqi3FqEwGTbfcVHitQ";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

async function fetchLatestShorts(): Promise<YouTubeVideo[]> {
  try {
    // First, get the channel's uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    
    if (!channelResponse.ok) throw new Error("Failed to fetch channel");
    
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Get the latest videos from uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
    );
    
    if (!videosResponse.ok) throw new Error("Failed to fetch videos");
    
    const videosData = await videosResponse.json();


    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(",");
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`
    );
    
    const detailsData = await detailsResponse.json();


    const shorts: YouTubeVideo[] = [];
    
    for (let i = 0; i < videosData.items.length && shorts.length < 6; i++) {
      const video = videosData.items[i];
      const details = detailsData.items.find(
        (d: any) => d.id === video.snippet.resourceId.videoId
      );
      
      // Parse ISO 8601 duration (PT1M30S format)
      const duration = details?.contentDetails?.duration || "";
      const isShort = parseDuration(duration) <= 90;
      
      if (isShort) {
        const viewCount = parseInt(details?.statistics?.viewCount || "0");
        shorts.push({
          id: video.snippet.resourceId.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          videoUrl: `https://www.youtube.com/shorts/${video.snippet.resourceId.videoId}`,
          views: formatViews(viewCount),
        });
      }
    }
    
    return shorts;
  } catch (error) {
    console.error("Error fetching YouTube shorts:", error);
    throw error;
  }
}

function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;

  return hours * 3600 + minutes * 60 + seconds;
}

function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }
  return views.toString();
}

export function useYouTubeShorts() {
  return useQuery({
    queryKey: ["youtube-shorts"],
    queryFn: fetchLatestShorts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  });
}
