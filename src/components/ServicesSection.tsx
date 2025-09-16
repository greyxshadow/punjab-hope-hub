import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Home, Heart, Users, Truck, Phone } from "lucide-react";
import foodImage from "@/assets/food-distribution.jpg";
import shelterImage from "@/assets/shelter-assistance.jpg";

const services = [
  {
    icon: Utensils,
    title: "Emergency Food Relief",
    description: "Providing hot meals, food packages, and clean drinking water to flood-affected families.",
    image: foodImage,
    stats: "3000+ meals served daily"
  },
  {
    icon: Home,
    title: "Temporary Shelter",
    description: "Setting up safe, dry temporary shelters with basic amenities for displaced families.",
    image: shelterImage,
    stats: "500+ families housed"
  },
  {
    icon: Heart,
    title: "Medical Assistance",
    description: "Mobile medical units providing healthcare, medicines, and first aid to affected areas.",
    stats: "200+ patients treated"
  },
  {
    icon: Users,
    title: "Family Reunification",
    description: "Helping separated families reconnect and providing psychological support during crisis.",
    stats: "150+ families reunited"
  },
  {
    icon: Truck,
    title: "Relief Material Distribution",
    description: "Distributing blankets, clothes, hygiene kits, and essential supplies to those in need.",
    stats: "10,000+ relief kits distributed"
  },
  {
    icon: Phone,
    title: "24/7 Helpline",
    description: "Round-the-clock emergency helpline for immediate assistance and coordination.",
    stats: "1000+ calls answered"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We're Helping
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive relief efforts address the immediate and ongoing needs of flood-affected communities in Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {!service.image && (
                      <div className="mb-4">
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-4 inline-flex">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="text-sm font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                      {service.stats}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Every Contribution Makes a Difference
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your support helps us expand these services and reach more families in need. Together, we can rebuild lives and restore hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">₹500</div>
                <div className="text-sm text-muted-foreground">feeds a family for a week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹2000</div>
                <div className="text-sm text-muted-foreground">provides emergency shelter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">₹5000</div>
                <div className="text-sm text-muted-foreground">supports a family for a month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;