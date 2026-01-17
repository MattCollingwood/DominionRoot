import { useQuery } from "@tanstack/react-query";

interface LiveStatus {
  isLive: boolean;
  checkedAt: string;
}

async function checkLiveStatus(): Promise<LiveStatus> {
  const response = await fetch('/api/check-live');
  if (!response.ok) {
    throw new Error('Failed to check live status');
  }
  return response.json();
}

export function useTikTokLiveStatus() {
  return useQuery({
    queryKey: ['tiktok-live-status'],
    queryFn: checkLiveStatus,
    refetchInterval: 60 * 1000, // Check every 60 seconds
    staleTime: 30 * 1000, // Consider data stale after 30 seconds
    retry: 3,
    // For development, you can override to always show as live
    placeholderData: import.meta.env.DEV ? { isLive: true, checkedAt: new Date().toISOString() } : undefined,
  });
}