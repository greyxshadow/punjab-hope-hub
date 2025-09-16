import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, MapPin, Heart } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    number: "5000+",
    label: "Families Served",
    description: "Providing comprehensive relief to flood-affected families across Punjab"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Operations",
    description: "Round-the-clock relief operations ensuring no one is left behind"
  },
  {
    icon: MapPin,
    number: "25+",
    label: "Villages Covered",
    description: "Reaching remote and inaccessible areas with essential relief materials"
  },
  {
    icon: Heart,
    number: "1000+",
    label: "Volunteers",
    description: "Dedicated volunteers working tirelessly to serve the community"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Commitment to Rebuilding Lives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At PunarNirman Trust, we believe that every life matters. Our unwavering commitment drives us to work 
            tirelessly, ensuring that no family faces this crisis alone. We don't just provide relief – we rebuild hope, 
            restore dignity, and create pathways to recovery.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-4 inline-flex mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Approach */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Our Approach: Beyond Emergency Relief
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Immediate Response</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Swift deployment of emergency teams within hours of disaster reports, ensuring rapid relief delivery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Sustained Support</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Long-term assistance programs ensuring families have support throughout their recovery journey.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community Building</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empowering communities to rebuild stronger, with improved infrastructure and disaster preparedness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;