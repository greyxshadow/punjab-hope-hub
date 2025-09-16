import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import reliefImage1 from "@/assets/relief-recipients-1.jpg";
import reliefImage2 from "@/assets/relief-recipients-2.jpg";
import reliefImage3 from "@/assets/relief-recipients-3.jpg";

const stories = [
  {
    image: reliefImage1,
    title: "Families Finding Hope",
    description: "Meet the Sharma family from Jalandhar, who lost everything in the floods but found hope through our emergency food relief program. With your support, they're rebuilding their lives one day at a time.",
    impact: "Food relief for 2 weeks"
  },
  {
    image: reliefImage2,
    title: "Safe Haven for Children",
    description: "These children from flood-affected villages now have a safe, dry place to stay. Our temporary shelters provide not just protection, but a sense of community and hope for better days ahead.",
    impact: "Shelter for 50+ families"
  },
  {
    image: reliefImage3,
    title: "Healthcare When Needed Most",
    description: "Elderly residents receiving critical medical care through our mobile health units. In times of crisis, quality healthcare becomes a lifeline, and we ensure no one is left without care.",
    impact: "Medical care for 200+ patients"
  }
];

const StoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories from the Ground
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Behind every statistic is a human story. These are the faces of resilience, hope, and the unwavering 
            human spirit that continues to inspire our mission every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-warm transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {story.impact}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {story.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Be Part of Their Story
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every donation, every share, every act of kindness becomes part of these stories of hope and recovery. 
              Join us in writing the next chapter of rebuilding and restoration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/donate">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-warm text-white font-semibold px-8 py-4 text-lg group transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Help Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                Share Our Mission
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p className="italic">
                "In every act of kindness, we plant seeds of hope that will grow into forests of change." 
                - PunarNirman Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;