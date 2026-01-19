import { ExternalLink, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import halleAvatar from "@/assets/Halle-image.jpg";
import willyAvatar from "@/assets/Willy-image.jpeg";
import mattAvatar from "@/assets/Matt-image.jpg";

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  links?: {
    website?: string;
    email?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Halle",
    role: "Creative Designer",
    avatar: halleAvatar,
    bio: "Halle brings creativity and vision to every project, crafting engaging visual content that keeps the Dominion Root community connected and inspired. With an eye for detail and a passion for storytelling, Halle ensures that every piece of content resonates with fans of the Haloverse.",
    links: {
      website: "https://www.hallekphotography.com",
      instagram: "https://www.instagram.com/halle_marie_15/",
      email: "hallekphotography@gmail.com",
    },
  },
  {
    name: "Willy",
    role: "Graphic Designer",
    avatar: willyAvatar,
    bio: "Willy is the visual mastermind behind the eye-catching thumbnails and graphics that make Dominion Root stand out. With a talent for turning concepts into compelling visuals, Willy's designs grab attention and draw viewers into the world of Halo lore and gaming content.",
    links: {
      website: "https://www.williamlandonwriter.com/",
      instagram: "https://www.instagram.com/willylikestodraw/",
      email: "willy@dominionroot.com",
    },
  },
  {
    name: "Matt",
    role: "Website Developer",
    avatar: mattAvatar,
    bio: "Matt is the technical backbone of Dominion Root, building and maintaining the website to ensure everything runs smoothly. With expertise in web development and a dedication to creating seamless user experiences, Matt keeps the digital home of Dominion Root running at peak performance.",
    links: {
      website: "https://mattcollingwood.com",
      linkedin: "https://www.linkedin.com/in/mattdcollingwood/",
      email: "matt.d.collingwood@gmail.com",
    },
  },
];

function TeamMemberCard({ member, index }: { member: TeamMemberProps; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="glass-card rounded-lg overflow-hidden">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
        {/* Image Section */}
        <div className="relative md:w-1/3">
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/90 to-transparent" />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-body text-primary text-sm uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            {member.bio}
          </p>

          {/* Social Links */}
          {member.links && (
            <div className="flex flex-wrap gap-2">
              {member.links.website && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.links.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </Button>
              )}
              {member.links.email && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${member.links.email}`}>
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              )}
              {member.links.instagram && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.links.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {member.links.twitter && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {member.links.linkedin && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/30" />
    </div>
  );
}

const Team = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-halo opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
              Meet the <span className="text-primary text-glow-cyan">Blue Team</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              The talented Spartans helping bring Dominion Root to life.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Team;