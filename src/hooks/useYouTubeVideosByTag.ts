import { useQuery } from "@tanstack/react-query";

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  publishedAt: string;
  description: string;
  tags: string[];
}

const CHANNEL_ID = "UCm_nQCqi3FqEwGTbfcVHitQ";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

async function fetchVideosByTag(tag: string): Promise<YouTubeVideo[]> {
  try {
    // Get the uploads playlist ID from the channel
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    
    if (!channelResponse.ok) throw new Error("Failed to fetch channel");
    
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Get all videos from uploads playlist (fetch more to ensure we get enough tagged videos)
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
    );
    
    if (!videosResponse.ok) throw new Error("Failed to fetch videos");
    
    const videosData = await videosResponse.json();

    // Get video IDs to fetch detailed information including tags
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(",");
    
    // Fetch video details including tags
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${API_KEY}`
    );
    
    if (!detailsResponse.ok) throw new Error("Failed to fetch video details");
    
    const detailsData = await detailsResponse.json();

    // Filter videos by tag and map to our interface
    const taggedVideos: YouTubeVideo[] = detailsData.items
      .filter((item: any) => {
        const tags = item.snippet.tags || [];
        // Case-insensitive tag matching
        return tags.some((t: string) => t.toLowerCase() === tag.toLowerCase());
      })
      .map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
        tags: item.snippet.tags || [],
      }));
    
    return taggedVideos;
  } catch (error) {
    console.error(`Error fetching YouTube videos with tag "${tag}":`, error);
    throw error;
  }
}

/**
 * Hook to fetch Halo VS videos (tagged with "halovs")
 */
export function useHaloVsVideos() {
  return useQuery({
    queryKey: ["youtube-videos", "halovs"],
    queryFn: () => fetchVideosByTag("halovs"),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  });
}

/**
 * Hook to fetch Halo Lore videos (tagged with "hlore")
 */
export function useHaloLoreVideos() {
  return useQuery({
    queryKey: ["youtube-videos", "hlore"],
    queryFn: () => fetchVideosByTag("hlore"),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  });
}
