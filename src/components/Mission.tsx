import { Card, CardContent } from "@/components/ui/card";

export const Mission = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          The <span className="text-primary">Hypothesis</span>
        </h2>
        
        <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-glow mb-8">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Imagine there is given public access to Alien spacecraft to team who will present best plan to reverse engineer such an artifact.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We believe it's just the matter of time. And also matter of the good plan. Then, why to wait?
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We have 0 insider informations confirming that there is such a vehicle in Humankind possession, but isn't it fun to think so?
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Our intention is to organize in middle of January in San Francisco, CA a hackathon. Prior to that, we want to organize a working group specifying what technologies we shall be focusing on during the hackathon.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
