import { useState, useEffect } from 'react';
import { Youtube, Video, Clock, Users } from 'lucide-react';

const YouTubeStats = () => {
  const [stats, setStats] = useState({
    subscriberCount: '10K+',
    videoCount: '200+',
    viewCount: '50K+',
    loading: true,
    error: false
  });

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const CHANNEL_ID = import.meta.env."UCm_nQCqi3FqEwGTbfcVHitQ"; 
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        
        if (data.items && data.items[0]) {
          const statistics = data.items[0].statistics;
          
          setStats({
            subscriberCount: formatNumber(statistics.subscriberCount),
            videoCount: formatNumber(statistics.videoCount),
            viewCount: formatNumber(statistics.viewCount),
            loading: false,
            error: false
          });
        }
      } catch (error) {
        console.error('Error fetching YouTube stats:', error);
        setStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchYouTubeStats();
  }, []);

  const formatNumber = (num) => {
    const number = parseInt(num);
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
  };

  const calculateWatchHours = (views) => {
    // Rough estimate: average view duration ~2 minutes
    const avgMinutesPerView = 2;
    const totalMinutes = parseInt(views.replace(/[^0-9]/g, '')) * 1000 * avgMinutesPerView;
    const hours = Math.floor(totalMinutes / 60);
    return formatNumber(hours);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
            <span className="font-display font-bold text-2xl text-primary block">
              {stats.loading ? '...' : stats.subscriberCount}
            </span>
            <span className="font-body text-sm text-muted-foreground">
              Subscribers
            </span>
          </div>

          <div className="glass-card rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Video className="w-8 h-8 mx-auto mb-2 text-primary" />
            <span className="font-display font-bold text-2xl text-primary block">
              {stats.loading ? '...' : stats.videoCount}
            </span>
            <span className="font-body text-sm text-muted-foreground">
              Videos
            </span>
          </div>

          <div className="glass-card rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <span className="font-display font-bold text-2xl text-primary block">
              {stats.loading ? '...' : calculateWatchHours(stats.viewCount)}
            </span>
            <span className="font-body text-sm text-muted-foreground">
              Watch Hours
            </span>
          </div>

          <div className="glass-card rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Youtube className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <span className="font-display font-bold text-2xl text-primary block">
              {stats.loading ? '...' : stats.viewCount}
            </span>
            <span className="font-body text-sm text-muted-foreground">
              Total Views
            </span>
          </div>
        </div>
        
        {stats.error && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Unable to load live stats. Showing cached data.
          </p>
        )}
      </div>
    </section>
  );
};


export default YouTubeStats;
