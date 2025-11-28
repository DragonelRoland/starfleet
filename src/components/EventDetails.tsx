import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "When",
      content: "Middle of January 2025",
      description: "Mark your calendars for humanity's most ambitious hackathon",
    },
    {
      icon: MapPin,
      title: "Where",
      content: "San Francisco, CA",
      description: "The heart of innovation meets extraterrestrial engineering",
    },
    {
      icon: Users,
      title: "Pre-Hackathon",
      content: "Working Group",
      description: "Join us to define technology focus areas before the main event",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Event <span className="text-primary">Details</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <detail.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center text-2xl">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-bold text-primary mb-2">{detail.content}</p>
                <p className="text-muted-foreground">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
