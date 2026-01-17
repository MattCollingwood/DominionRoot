import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // Check environment variable for manual control
  const isLive = process.env.IS_LIVE === 'true';
  
  // Cache the response for 10 seconds
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  
  return res.status(200).json({ 
    isLive,
    checkedAt: new Date().toISOString()
  });
}