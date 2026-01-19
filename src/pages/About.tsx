import { Youtube, MessageCircle, Heart, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dominionRootAvatar from "@/assets/dominion-root.jpg";
import YouTubeStats from "@/components/YouTubeStats";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-halo opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
              About <span className="text-primary text-glow-cyan">Dominion Root</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              The story behind the channel and the Spartan who makes it happen.
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
                    alt="Dominion Root Avatar"
                    className="w-40 h-40 rounded-2xl object-cover border-4 border-primary/50 glow-cyan"
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display font-bold text-3xl mb-4">
                    Hey, I'm <span className="text-primary">Dominion Root</span>
                  </h2>
                  <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                    <p>
                      Welcome to my corner of the Haloverse! I am a creator and lifelong gamer whose identity was born out of a spontaneous moment during the midnight release of Halo: Reach in 2010. While in college with friends, a sudden change to Xbox Live rules required an immediate gamertag update before I could play. In a moment of panic—and inspired by a bottle of Old Dominion Root Beer sitting nearby—"DominionRoot" was created. What started as a split-second decision became a name that has followed me ever since.
                    </p>
                    <p>
                      I started this channel to share my in-depth knowledge of Halo with like-minded Spartans. From Halo: The Fall of Reach to the upcoming video game, Halo: Campaign Evolved, I love being part of this community and want to share my passion with you all. Through daily video shorts and community events hosted through my discord and TikTok, I want to create content that brings people together and celebrates our shared love for the Haloverse.
                    </p>
                    <p>
                      I can't wait to see all of you at my next event, online, or in the comments section of my videos. Together, let's keep the spirit of Halo alive and thriving!
                    </p>
                    <p className="font-display text-primary">
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

      {/* Stats Section */}
      <YouTubeStats />

      {/* CTA to Team Page */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl mb-4">
              Want to meet the team?
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Behind every great Spartan is a fireteam. Meet the talented people who help bring Dominion Root to life.
            </p>
            <Button variant="halo" size="lg" asChild>
              <Link to="/team">
                Meet the Blue Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;