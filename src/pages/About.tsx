import { Youtube, MessageCircle, Heart, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import halleAvatar from "@/assets/Halle-image.jpg";
import willyAvatar from "@/assets/Willy-image.jpeg";
import mattAvatar from "@/assets/Matt-image.jpg";
import dominionRootAvatar from "@/assets/dominion-root.jpg";

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Halle",
    role: "Creative Designer",
    avatar: halleAvatar,
    description: "Crafting engaging visual content to keep the community connected.",
  },
  {
    name: "Willy",
    role: "Graphic Designer",
    avatar: willyAvatar,
    description: "Designing eye-catching thumbnails and visuals that grab attention.",
  },
  {
    name: "Matt",
    role: "Website Developer",
    avatar: mattAvatar,
    description: "Building and maintaining the DominionRoot website to keep things running smoothly.",
  },
];

function TeamCard({ member }: { member: TeamMemberProps }) {
  return (
    <div className="group glass-card rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
        <img
          src={member.avatar}
          alt={member.name}
          className="relative w-full h-full rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
        />
      </div>
      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
        {member.name}
      </h3>
      <p className="font-body text-sm text-primary mb-2">{member.role}</p>
      <p className="font-body text-sm text-muted-foreground">{member.description}</p>
    </div>
  );
}

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-halo opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
              About <span className="text-primary text-glow-cyan">DominionRoot</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              The story behind the channel and the people who make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div>
                  <img
                    src={dominionRootAvatar}
                    alt="DominionRoot Avatar"
                    className="w-40 h-40 rounded-2xl object-cover border-4 border-primary/50 glow-cyan"
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display font-bold text-3xl mb-4">
                    Hey, I'm <span className="text-primary">DominionRoot</span>
                  </h2>
                  <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                    <p>
                      Welcome to my corner of the Haloverse! I am a creator and lifelong gamer whose identity was born out of a spontaneous moment during the midnight release of Halo: Reach in 2010. While in college with friends, a sudden change to Xbox Live rules required an immediate gamertag update before I could play. In a moment of panic—and inspired by a bottle of Old Dominion Root Beer sitting nearby—“Dominion Root” was created. What started as a split-second decision became a name that has followed me ever since.
                    </p>
                    <p>
                      I started this channel to share my in-depth knowledge of Halo with like-minded Spartans. From Halo: The Fall of Reach to the upcoming video game, Halo: Campaign Evolved, I love being part of this community and want to share my passion with you all. Through daily video shorts and community events hosted through my discord and TikTok, I want to create content that brings people together and celebrates our shared love for the UNSC.
                    </p>
                    <p>
                      I can't wait to see all of you at my next event, online, or in the comments section of my videos. Together, let's keep the spirit of Halo alive and thriving!
                    </p>
                    <p>
                      Root Out!
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                      <Gamepad2 className="w-5 h-5 text-primary" />
                      <span className="font-body text-sm">Halo Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                      <Heart className="w-5 h-5 text-accent" />
                      <span className="font-body text-sm">Community Focused</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <span className="font-body text-sm">Content Creator</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4 justify-center md:justify-start">
                    <Button variant="halo" asChild>
                      <a
                        href="https://www.youtube.com/@DominionRoot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-5 h-5" />
                        Subscribe
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5" />
                        Join Discord
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="The Blue Team"
            subtitle="The amazing Spartans helping bring this channel to life"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Subscribers", value: "10K+", icon: "🎮" },
              { label: "Videos", value: "200+", icon: "📹" },
              { label: "Watch Hours", value: "50K+", icon: "⏱️" },
              { label: "Community Members", value: "5K+", icon: "🤝" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-6 text-center"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <span className="font-display font-bold text-2xl text-primary block">
                  {stat.value}
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
