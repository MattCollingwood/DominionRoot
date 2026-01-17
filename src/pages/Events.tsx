import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { downloadICSFile, parseEventDateTime } from "@/utils/calendar";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link?: string;
  event?: boolean;
  stream?: boolean;
}

const events: EventProps[] = [
  {
    title: "Dominion Root's Community Day",
    date: "February 15, 2026",
    time: "1:00 PM - 8:00 PM EST",
    location: "The Wine Collective, 1700 W 41st St - Suite 490, Baltimore, MD 21211",
    description: "Join me for an epic Halo themed day complete with games, tournaments and other members of the community and team!",
    link: "https://www.tiktok.com/@dominionroot/photo/7591922444609359135?is_from_webapp=1&sender_device=pc",
    event: true,
  },
  {
    title: "Dominion Root's Charity Live Stream Event",
    date: "January 18, 2026",
    time: "12:00 PM EST",
    location: "TikTok",
    description: "In support of National Master Chief Day, I'll be hosting a special charity live stream event to raise funds for Cancer Research.",
    link: "https://www.tiktok.com/@dominionroot/",
    stream: true,
  },
  {
    title: "Dominion Root's TikTok Live Stream",
    date: "January 21, 2026",
    time: "8:00 PM EST",
    location: "TikTok",
    description: "Come and join me for weekly live streams of Halo and other content. All skill levels welcome!",
    link: "https://www.tiktok.com/@dominionroot/",
    stream: true,
  },
  {
    title: "Dominion Root's TikTok Live Stream",
    date: "January 28, 2026",
    time: "8:00 PM EST",
    location: "TikTok",
    description: "Come and join me for weekly live streams of Halo and other content. All skill levels welcome!",
    link: "https://www.tiktok.com/@dominionroot/",
    stream: true,
  },
  {
    title: "Dominion Root's TikTok Live Stream",
    date: "February 4, 2026",
    time: "8:00 PM EST",
    location: "TikTok",
    description: "Come and join me for weekly live streams of Halo and other content. All skill levels welcome!",
    link: "https://www.tiktok.com/@dominionroot/",
    stream: true,
  },
];

function EventCard({ event, index }: { event: EventProps; index: number }) {
  const handleAddToCalendar = () => {
    const { start, end } = parseEventDateTime(event.date, event.time);
    
    downloadICSFile(
      {
        title: event.title,
        description: event.description,
        location: event.location,
        startDate: start,
        endDate: end,
      },
      `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`
    );
  };

  return (
    <div
      className={`relative group glass-card rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 ${
        event.event ? "border-l-4 border-l-accent" : event.stream ? "border-l-4 border-l-primary" : ""
      }`}
    >
      {/* Badge for Featured Event */}
      {event.event && (
        <div className="hidden sm:block absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/50">
          <span className="text-xs font-body font-semibold text-accent uppercase tracking-wider">
            Featured
          </span>
        </div>
      )}

      {/* Badge for Stream */}
      {event.stream && (
        <div className="hidden sm:block absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50">
          <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
            Stream
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex flex-col items-center justify-center">
            <span className="text-2xl font-display font-bold text-primary">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-xs font-body text-muted-foreground uppercase">
              {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            {event.location}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex-1" onClick={handleAddToCalendar}>
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </Button>
          {event.link && (
            <Button variant="default" size="sm" asChild>
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Details
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

const Events = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-halo opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
              Upcoming <span className="text-primary text-glow-cyan">Events</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Mark your calendar and don't miss out on streams, community nights, and special events.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>

          {/* Empty state or load more */}
          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              More events coming soon! Follow on social media for announcements.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
