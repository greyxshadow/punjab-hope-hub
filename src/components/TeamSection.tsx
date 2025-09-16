import { Card, CardContent } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpg";

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & Director",
    description: "Leading disaster relief efforts with 15+ years of experience in humanitarian work.",
    expertise: "Disaster Management"
  },
  {
    name: "Priya Singh",
    role: "Operations Manager",
    description: "Coordinating ground operations and ensuring efficient distribution of relief materials.",
    expertise: "Operations & Logistics"
  },
  {
    name: "Amit Sharma",
    role: "Community Coordinator",
    description: "Building bridges with local communities and ensuring culturally sensitive relief efforts.",
    expertise: "Community Relations"
  },
  {
    name: "Dr. Meera Patel",
    role: "Medical Director",
    description: "Overseeing medical relief operations and health services in affected areas.",
    expertise: "Emergency Medicine"
  },
  {
    name: "Harpreet Kaur",
    role: "Volunteer Coordinator",
    description: "Managing and training volunteers to maximize our relief efforts across Punjab.",
    expertise: "Volunteer Management"
  },
  {
    name: "Suresh Gupta",
    role: "Finance & Transparency",
    description: "Ensuring transparent use of funds and maintaining accountability in all operations.",
    expertise: "Financial Management"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Dedicated Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals working tirelessly to provide relief and support to flood-affected communities in Punjab.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={teamPhoto}
              alt="PunarNirman Trust Team"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                United in Service, Strong in Purpose
              </h3>
              <p className="text-lg text-gray-200">
                Our team of dedicated professionals and volunteers working together for a common cause
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1 inline-block mb-3">
                    {member.expertise}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteer Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for dedicated volunteers to help us expand our reach and impact. 
              Your time and skills can make a real difference in someone's life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Relief Operations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Committed Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;