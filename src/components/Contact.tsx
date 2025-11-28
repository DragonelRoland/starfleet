import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Step <span className="text-primary">Up</span>?
        </h2>
        
        <Card className="bg-gradient-hero backdrop-blur border-primary/30 shadow-glow-strong">
          <CardContent className="p-12">
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Join us in the most audacious reverse engineering project ever conceived. Whether you're a physicist, engineer, theorist, or simply curious about what lies beyond, we want to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all text-lg group"
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join Discussion
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8">
              Interested?
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
