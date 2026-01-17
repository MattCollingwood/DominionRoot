import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    // Fetch the TikTok profile page
    const response = await fetch('https://www.tiktok.com/@dominionroot', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const html = await response.text();
    
    // Check if the page contains live stream indicators
    // TikTok shows "LIVE" badge when someone is streaming
    const isLive = html.includes('"isLive":true') || 
                   html.includes('webapp.live-detail') ||
                   html.includes('"roomId"') && html.includes('"status":2');
    
    // Cache the response for 30 seconds to avoid rate limiting
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    
    return res.status(200).json({ 
      isLive,
      checkedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error checking live status:', error);
    return res.status(500).json({ 
      isLive: false,
      error: 'Failed to check live status' 
    });
  }
}